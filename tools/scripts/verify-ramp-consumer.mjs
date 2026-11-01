import assert from 'node:assert/strict';
import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { chromium } from 'playwright';

export async function verifyRampConsumer(app) {
  const folder = path.join(app, 'dist-ramps');
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
      for (const theme of ['brand-neutral', 'independent-neutral']) {
        await page.evaluate(
          ({ mode, theme }) => {
            document.documentElement.className = mode;
            document.documentElement.dataset.pandaTheme = theme;
          },
          { mode, theme },
        );
        await page.addStyleTag({
          content: '*,*::before,*::after {transition:none!important}',
        });
        const results = await page.evaluate(() => {
          const canvas = document.createElement('canvas');
          canvas.width = canvas.height = 1;
          const context = canvas.getContext('2d', { willReadFrequently: true });
          const luminance = (color) => {
            context.clearRect(0, 0, 1, 1);
            context.fillStyle = color;
            context.fillRect(0, 0, 1, 1);
            const channels = [...context.getImageData(0, 0, 1, 1).data];
            if (channels[3] !== 255)
              throw new Error(`Expected opaque color ${color}`);
            const linear = channels.slice(0, 3).map((value) => {
              const channel = value / 255;
              return channel <= 0.04045
                ? channel / 12.92
                : ((channel + 0.055) / 1.055) ** 2.4;
            });
            return 0.2126 * linear[0] + 0.7152 * linear[1] + 0.0722 * linear[2];
          };
          const ratio = (a, b) =>
            (Math.max(a, b) + 0.05) / (Math.min(a, b) + 0.05);
          return [
            ['button', '[data-testid="button"]', '[data-testid="button"]'],
            ['input', '[data-testid="input"]', 'input'],
            ['select', '.Select__control', '[role="combobox"]'],
          ].map(([name, surface, text]) => {
            const bg = getComputedStyle(document.querySelector(surface));
            const fg = getComputedStyle(document.querySelector(text));
            const background = bg.backgroundColor;
            return {
              name,
              foreground: fg.color,
              background,
              border: bg.borderTopColor,
              textContrast: ratio(luminance(fg.color), luminance(background)),
              borderContrast: ratio(
                luminance(bg.borderTopColor),
                luminance(background),
              ),
            };
          });
        });
        for (const result of results) {
          assert.ok(
            result.textContrast >= 4.5,
            `${mode}/${theme}/${result.name} text ${JSON.stringify(result)}`,
          );
        }
        console.log(
          `PASS ramp consumer ${mode}/${theme}: ${JSON.stringify(results)}`,
        );
      }
    }
  } finally {
    await browser?.close();
    await new Promise((resolve) => server.close(resolve));
  }
}
