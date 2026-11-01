import assert from 'node:assert/strict';
import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { chromium } from 'playwright';

export async function verifyTokenConsumer(app) {
  const folder = path.join(app, 'dist-tokens');
  const server = createServer(async (request, response) => {
    try {
      const pathname = new URL(request.url, 'http://localhost').pathname;
      const file = path.join(
        folder,
        pathname === '/' ? 'index.html' : pathname,
      );
      const body = await readFile(file);
      const types = {
        '.js': 'text/javascript',
        '.css': 'text/css',
        '.html': 'text/html',
      };
      response.setHeader(
        'Content-Type',
        types[path.extname(file)] ?? 'application/octet-stream',
      );
      response.end(body);
    } catch {
      response.statusCode = 404;
      response.end();
    }
  });
  await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));
  let browser;
  try {
    browser = await chromium.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto(`http://127.0.0.1:${server.address().port}`);
    await page.locator('[data-testid="button"]').waitFor();
    for (const mode of ['light', 'dark']) {
      for (const theme of [false, true]) {
        await page.evaluate(
          ({ mode, theme }) => {
            document.documentElement.className = mode;
            if (theme)
              document.documentElement.dataset.pandaTheme = 'consumer-proof';
            else delete document.documentElement.dataset.pandaTheme;
          },
          { mode, theme },
        );
        // CSS transitions can otherwise expose an intermediate fill.
        await page.addStyleTag({
          content: '*, *::before, *::after { transition: none !important; }',
        });
        const result = await page.evaluate(() => {
          const style = (selector) => {
            const element = document.querySelector(selector);
            if (!element) throw new Error(`Missing ${selector}`);
            const css = getComputedStyle(element);
            return {
              background: css.backgroundColor,
              radius: css.borderRadius,
            };
          };
          const reverse = getComputedStyle(document.documentElement)
            .getPropertyValue('--colors-primary-fill')
            .trim();
          return {
            button: style('[data-testid="button"]'),
            input: style('[data-testid="input"]'),
            select: style('.Select__control'),
            reverse,
          };
        });
        for (const name of ['button', 'input', 'select']) {
          assert.equal(
            result[name].background,
            theme ? 'rgb(124, 58, 237)' : 'rgb(15, 118, 110)',
            `${mode}/${theme}/${name} fill`,
          );
          assert.equal(
            result[name].radius,
            theme ? '23px' : '19px',
            `${mode}/${theme}/${name} radius`,
          );
        }
        assert.equal(
          result.reverse,
          theme ? '#7c3aed' : '#0f766e',
          'Reverse alias must follow canonical override',
        );
        console.log(
          `PASS token consumer ${mode}, selected Theme=${theme}: ${JSON.stringify(result)}`,
        );
      }
    }
  } finally {
    await browser?.close();
    await new Promise((resolve) => server.close(resolve));
  }
}
