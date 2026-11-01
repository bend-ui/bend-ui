import assert from 'node:assert/strict';
import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { chromium } from 'playwright';

/** Check logical surface inheritance in real Base UI portals and both color modes. */
export async function verifySurfaceConsumer(app) {
  const folder = path.join(app, 'dist-surfaces');
  const server = createServer(async (request, response) => {
    try {
      const pathname = new URL(request.url, 'http://localhost').pathname;
      const file = path.join(
        folder,
        pathname === '/' ? 'index.html' : pathname,
      );
      const body = await readFile(file);
      response.setHeader(
        'Content-Type',
        { '.js': 'text/javascript', '.css': 'text/css', '.html': 'text/html' }[
          path.extname(file)
        ] ?? 'application/octet-stream',
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
    await page.locator('[data-testid="custom-popup"]').waitFor();
    await page.addStyleTag({
      content: '*,*::before,*::after{transition:none!important}',
    });
    for (const mode of ['light', 'dark']) {
      await page
        .getByTestId(`mode-${mode}`)
        .evaluate((button) => button.click());
      await page.waitForFunction(
        (selected) =>
          document
            .querySelector('[data-testid="dialog"]')
            .classList.contains(selected),
        mode,
      );
      const results = await page.evaluate(() => {
        const canvas = document.createElement('canvas');
        canvas.width = canvas.height = 1;
        const context = canvas.getContext('2d', { willReadFrequently: true });
        const luminance = (color) => {
          context.clearRect(0, 0, 1, 1);
          context.fillStyle = color;
          context.fillRect(0, 0, 1, 1);
          const bytes = [...context.getImageData(0, 0, 1, 1).data];
          if (bytes[3] !== 255) throw new Error(`Expected opaque ${color}`);
          const linear = bytes
            .slice(0, 3)
            .map((v) =>
              v / 255 <= 0.04045
                ? v / 255 / 12.92
                : ((v / 255 + 0.055) / 1.055) ** 2.4,
            );
          return 0.2126 * linear[0] + 0.7152 * linear[1] + 0.0722 * linear[2];
        };
        return [
          'page',
          'raised',
          'dialog',
          'popover',
          'nested-dialog',
          'override',
          'custom-popup',
        ].map((name) => {
          const element = document.querySelector(`[data-testid="${name}"]`);
          const css = getComputedStyle(element);
          const a = luminance(css.color),
            b = luminance(css.backgroundColor);
          return {
            name,
            level: element.dataset.surfaceLevel,
            theme: element.dataset.pandaTheme,
            background: css.backgroundColor,
            foreground: css.color,
            shadow: css.boxShadow,
            zIndex: css.zIndex,
            textContrast: (Math.max(a, b) + 0.05) / (Math.min(a, b) + 0.05),
            outsidePage: !document
              .querySelector('[data-testid="page"]')
              .contains(element),
            customTarget: document
              .querySelector('[data-testid="portal-target"]')
              .contains(element),
          };
        });
      });
      const byName = Object.fromEntries(
        results.map((result) => [result.name, result]),
      );
      for (const result of results) {
        assert.equal(
          result.theme,
          'surface-proof',
          `${mode}/${result.name} Theme scope`,
        );
        assert.ok(
          result.textContrast >= 4.5,
          `${mode}/${result.name} contrast ${result.textContrast}`,
        );
      }
      assert.equal(byName.page.level, 'page');
      for (const name of ['raised', 'dialog', 'custom-popup']) {
        assert.equal(byName[name].level, 'raised');
        assert.equal(byName[name].background, byName.raised.background);
      }
      for (const name of ['popover', 'nested-dialog']) {
        assert.equal(byName[name].level, 'overlay');
        assert.equal(byName[name].background, byName.popover.background);
      }
      assert.notEqual(byName.page.background, byName.raised.background);
      assert.notEqual(byName.raised.background, byName.popover.background);
      assert.notEqual(byName.raised.shadow, byName.popover.shadow);
      for (const name of [
        'dialog',
        'popover',
        'nested-dialog',
        'override',
        'custom-popup',
      ])
        assert.equal(
          byName[name].outsidePage,
          true,
          `${name} must actually portal`,
        );
      assert.equal(byName['custom-popup'].customTarget, true);
      assert.equal(byName.dialog.zIndex, '41');
      assert.equal(byName.popover.zIndex, '73');
      assert.equal(byName.override.zIndex, '91');
      assert.equal(byName.override.level, 'page');
      assert.equal(byName.override.background, 'oklch(0.75 0 0)');
      assert.equal(byName.override.shadow, 'none');
      console.log(`PASS surface consumer ${mode}: ${JSON.stringify(results)}`);
    }
  } finally {
    try {
      await browser?.close();
    } finally {
      await new Promise((resolve) => server.close(resolve));
    }
  }
}
