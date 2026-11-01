import assert from 'node:assert/strict';
import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { chromium } from 'playwright';

/** Real packed components + generated CSS, including composited alpha fills. */
export async function verifyInteractionConsumer(app) {
  const folder = path.join(app, 'dist-interactions');
  const server = createServer(async (request, response) => {
    try {
      const pathname = new URL(request.url, 'http://localhost').pathname;
      const file = path.join(
        folder,
        pathname === '/' ? 'index.html' : pathname,
      );
      response.setHeader(
        'Content-Type',
        { '.js': 'text/javascript', '.css': 'text/css', '.html': 'text/html' }[
          path.extname(file)
        ] ?? 'application/octet-stream',
      );
      response.end(await readFile(file));
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
    await page.addStyleTag({
      content: '*,*::before,*::after{transition:none!important}',
    });
    const results = [];
    const contrastFailures = [];
    // Sample resolved browser colors: alpha fills are composited over ancestors.
    const sample = async (name) =>
      page.getByTestId(name).evaluate((element) => {
        const canvas = document.createElement('canvas');
        canvas.width = canvas.height = 1;
        const ctx = canvas.getContext('2d', { willReadFrequently: true });
        const paint = (color) => {
          ctx.fillStyle = color;
          ctx.fillRect(0, 0, 1, 1);
        };
        const pixels = () => [...ctx.getImageData(0, 0, 1, 1).data].slice(0, 3);
        const luminance = (rgb) => {
          const linear = rgb.map((v) =>
            v / 255 <= 0.04045
              ? v / 255 / 12.92
              : ((v / 255 + 0.055) / 1.055) ** 2.4,
          );
          return 0.2126 * linear[0] + 0.7152 * linear[1] + 0.0722 * linear[2];
        };
        const contrast = (a, b) =>
          (Math.max(luminance(a), luminance(b)) + 0.05) /
          (Math.min(luminance(a), luminance(b)) + 0.05);
        const chain = [];
        for (let node = element; node; node = node.parentElement)
          chain.unshift(node);
        paint('white');
        for (const node of chain.slice(0, -1))
          paint(getComputedStyle(node).backgroundColor);
        const parent = pixels();
        const css = getComputedStyle(element);
        paint(css.backgroundColor);
        const bg = pixels();
        paint(css.color);
        const fg = pixels();
        paint(css.outlineColor);
        const ring = pixels();
        paint(css.borderTopColor);
        const border = pixels();
        return {
          fill: css.backgroundColor,
          foreground: css.color,
          textContrast: contrast(fg, bg),
          focusContrast: contrast(ring, parent),
          borderContrast: contrast(border, bg),
          border: css.borderTopColor,
          outline: css.outlineStyle,
          outlineWidth: css.outlineWidth,
          shadow: css.boxShadow,
          transform: css.transform,
          opacity: css.opacity,
          focusVisible: element.matches(':focus-visible'),
        };
      });
    const roleFill = async (name, token) =>
      page.getByTestId(name).evaluate((element, token) => {
        const probe = document.createElement('span');
        probe.style.backgroundColor = `var(--colors-${token})`;
        element.append(probe);
        const color = getComputedStyle(probe).backgroundColor;
        probe.remove();
        return color;
      }, token);
    const readable = async (name, label) => {
      const value = await sample(name);
      if (value.textContrast < 4.5)
        contrastFailures.push(`${label}/${name}: ${value.textContrast}`);
      results.push({ label, name, textContrast: value.textContrast });
      return value;
    };
    for (const theme of ['default', 'proton'])
      for (const mode of ['light', 'dark']) {
        const label = `${theme}/${mode}`;
        await page.reload();
        await page.getByTestId('proof').waitFor();
        await page.addStyleTag({
          content: '*,*::before,*::after{transition:none!important}',
        });
        await page.evaluate(
          ({ theme, mode }) => {
            document.documentElement.className = mode;
            document.documentElement.dataset.pandaTheme = theme;
            document.querySelector('[data-testid="proof"]').dataset.pandaTheme =
              theme;
          },
          { theme, mode },
        );
        await page.mouse.move(0, 0);
        for (const name of [
          'primary',
          'secondary',
          'tertiary',
          'danger',
          'inverse',
        ]) {
          const rest = await readable(name, `${label}/rest`);
          await page.getByTestId(name).hover();
          const hover = await readable(name, `${label}/hover`);
          assert.notEqual(
            hover.fill,
            rest.fill,
            `${label}/${name} hover feedback`,
          );
          await page.mouse.down();
          const active = await readable(name, `${label}/active`);
          if (name === 'primary' || name === 'danger') {
            assert.equal(
              active.fill,
              await roleFill(name, `fill-${name}-active`),
              `${label}/${name} active wins over hover`,
            );
          }
          await page.mouse.up();
        }
        await readable('selected', label);
        assert.equal(
          (await sample('selected')).fill,
          await roleFill('selected', 'fill-selected'),
        );
        await readable('toggle', label);
        assert.equal(
          (await sample('toggle')).transform,
          'none',
          'latched toggles do not scale',
        );
        await readable('input-root', label);
        const input = await sample('input-root');
        assert.ok(
          input.borderContrast >= 3,
          `${label} input boundary ${input.borderContrast}`,
        );
        for (const name of ['disabled', 'aria-disabled']) {
          await page.mouse.move(0, 0);
          const before = await sample(name);
          await page.getByTestId(name).hover();
          await page.mouse.down();
          const after = await sample(name);
          await page.mouse.up();
          assert.equal(
            after.fill,
            before.fill,
            `${label}/${name} fill must not change`,
          );
          assert.equal(
            after.transform,
            'none',
            `${label}/${name} must not scale`,
          );
        }
        const disabledInput = await sample('disabled-input-root');
        assert.equal(disabledInput.opacity, '0.5');
        await page.getByTestId('disabled-input-root').hover();
        assert.equal(
          (await sample('disabled-input-root')).border,
          disabledInput.border,
        );
        assert.notEqual(
          (await sample('invalid-input-root')).border,
          input.border,
          await page
            .getByTestId('invalid-input-root')
            .evaluate((e) => e.outerHTML),
        );
        const readonly = await sample('readonly-input-root');
        await page.getByTestId('readonly-input-root').hover();
        assert.equal(
          (await sample('readonly-input-root')).border,
          readonly.border,
        );
        await page.mouse.move(0, 0);
        await page.getByTestId('start').focus();
        await page.keyboard.press('Tab');
        assert.equal(
          await page
            .getByTestId('primary')
            .evaluate((e) => e === document.activeElement),
          true,
        );
        const focus = await sample('primary');
        assert.equal(focus.focusVisible, true);
        assert.equal(focus.outline, 'solid');
        assert.equal(focus.outlineWidth, '2px');
        assert.ok(
          focus.focusContrast >= 3,
          `${label} focus contrast ${focus.focusContrast}`,
        );
        let reachedInput = false;
        for (let i = 0; i < 12; i++) {
          await page.keyboard.press('Tab');
          assert.equal(
            await page
              .getByTestId('disabled')
              .evaluate((e) => e === document.activeElement),
            false,
          );
          assert.equal(
            await page
              .getByTestId('disabled-input')
              .evaluate((e) => e === document.activeElement),
            false,
          );
          if (
            await page
              .getByTestId('input')
              .evaluate((e) => e === document.activeElement)
          ) {
            reachedInput = true;
            break;
          }
        }
        assert.equal(reachedInput, true, `${label} Tab must reach Input`);
        assert.equal((await sample('input-root')).outline, 'solid');
        await page.getByTestId('standalone-input').focus();
        assert.equal((await sample('standalone-input')).outline, 'solid');
        const raised = await readable('raised', label);
        await page.getByTestId('raised').focus();
        assert.equal(
          (await sample('raised')).shadow,
          raised.shadow,
          'focus preserves elevation',
        );
        assert.equal((await sample('raised')).outline, 'solid');
        const overlay = await readable('overlay', label);
        assert.notEqual(raised.shadow, overlay.shadow);
        await readable('translucent', label);
        await page.getByTestId('menu-trigger').focus();
        await page.keyboard.press('Enter');
        await page.getByTestId('menu').waitFor();
        await page.waitForFunction(() =>
          document.activeElement?.matches('[data-testid="menu-first"]'),
        );
        // Portalled Menu gets the selected Theme/mode from the document scope.
        await readable('menu-first', label);
        await readable('menu-checked', label);
        assert.equal(
          await page.getByTestId('menu-first').getAttribute('data-highlighted'),
          '',
        );
        await page.keyboard.press('ArrowDown');
        await page.waitForFunction(() =>
          document
            .querySelector('[data-testid="menu-disabled"]')
            ?.hasAttribute('data-highlighted'),
        );
        const disabledMenu = await sample('menu-disabled');
        assert.equal(disabledMenu.outline, 'solid');
        assert.ok(
          disabledMenu.focusContrast >= 3,
          `${label} disabled Menu focus ${disabledMenu.focusContrast}`,
        );
        await page.keyboard.press('Enter');
        assert.equal(
          await page.getByTestId('disabled-activations').textContent(),
          '0',
        );
        assert.equal(await page.getByTestId('menu').isVisible(), true);
        await page.keyboard.press('ArrowDown');
        await page.waitForFunction(() =>
          document
            .querySelector('[data-testid="menu-checked"]')
            ?.hasAttribute('data-highlighted'),
        );
        assert.equal(
          (await sample('menu-checked')).fill,
          await roleFill('menu-checked', 'fill-translucent-selected'),
        );
        await page.keyboard.press('ArrowDown');
        await page.waitForFunction(() =>
          document
            .querySelector('[data-testid="menu-last"]')
            ?.hasAttribute('data-highlighted'),
        );
        assert.equal(
          await page.getByTestId('menu-last').getAttribute('data-highlighted'),
          '',
        );
        await page.keyboard.press('Escape');
        await page.waitForFunction(
          () =>
            document.querySelector('[data-testid="menu-trigger"]') ===
            document.activeElement,
        );
        assert.equal(
          await page
            .getByTestId('menu-trigger')
            .evaluate((e) => e === document.activeElement),
          true,
        );
        await page.emulateMedia({ reducedMotion: 'reduce' });
        await page.getByTestId('primary').hover();
        await page.mouse.down();
        assert.equal((await sample('primary')).transform, 'none');
        await page.mouse.up();
        await page.emulateMedia({ reducedMotion: 'no-preference' });
        console.log(
          `PASS interaction ${label}; focus contrast ${focus.focusContrast.toFixed(4)}`,
        );
      }
    // System colors retain the outline even when box shadows are suppressed.
    await page.emulateMedia({ forcedColors: 'active' });
    await page.getByTestId('start').focus();
    await page.keyboard.press('Tab');
    assert.equal((await sample('primary')).outline, 'solid');
    assert.deepEqual(contrastFailures, [], 'Text contrast failures');
    console.log(
      `PASS forced colors focus; measured pairs: ${JSON.stringify(results)}`,
    );
  } finally {
    try {
      await browser?.close();
    } finally {
      await new Promise((resolve) => server.close(resolve));
    }
  }
}
