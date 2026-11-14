import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createCompilerFromSnapshot, loadConfig } from '@pandacss/dev/node';

const directory = mkdtempSync(join(tmpdir(), 'bend-foundations-'));
let css: string;

beforeAll(async () => {
  const file = join(directory, 'panda.config.ts');
  const preset = fileURLToPath(new URL('./index.ts', import.meta.url));
  writeFileSync(
    file,
    `
    import { createBendPreset } from ${JSON.stringify(preset)};
    export default {
      presets: [createBendPreset()],
      preflight: true,
      staticCss: {
        recipes: { button: ['*'], input: ['*'], select: ['*'], selectDropdown: ['*'] },
        themes: ['stratus', 'volt', 'nebula'],
      },
    };
  `,
  );
  const snapshot = await loadConfig({ cwd: process.cwd(), file });
  css = createCompilerFromSnapshot(snapshot).compile().css;
});
afterAll(() => rmSync(directory, { recursive: true, force: true }));

describe('compiled foundation contract', () => {
  it('emits shared control sizing as variable references, including theme density', () => {
    expect(css).toContain('--sizes-control: 2.5rem');
    expect(css).toContain(
      '--sizes-control-sm: calc(var(--sizes-control) - 0.5rem)',
    );
    expect(css).toContain(
      '--sizes-control-lg: calc(var(--sizes-control) + 0.5rem)',
    );
    for (const name of [
      'Button__root',
      'Input__root',
      'Select__control',
      'Select__trigger',
    ]) {
      for (const size of ['sm', 'md', 'lg']) {
        const selector = `.${name}--size_${size}`;
        const block = css.slice(css.indexOf(selector)).split('}')[0];
        expect(block, selector).toContain(
          `min-height: var(--sizes-control${size === 'md' ? '' : `-${size}`})`,
        );
      }
    }
    expect(css).toContain('--sizes-control: 36px');
    expect(css).toContain('--sizes-control: 44px');
  });

  it('keeps nested corners clamped and theme overrides live', () => {
    expect(css).toContain('--radii-control: var(--radii-base)');
    expect(css).toContain(
      '--radii-inset: max(0px, calc(var(--radii-surface) - var(--spacing-sm)))',
    );
    expect(css).toContain('border-radius: var(--radii-control)');
    expect(css).toContain('--radii-control: 999px');
    expect(css).not.toMatch(/\{(?:radii|spacing|sizes|durations|easings)\./);
  });

  it('emits reduced motion for descendants and pseudo-elements independently of theme duration', () => {
    expect(css).toContain('@media (prefers-reduced-motion: reduce)');
    expect(css).toContain('*, *::before, *::after');
    expect(css).toContain('animation-duration: 0.01ms !important');
    expect(css).toContain('animation-iteration-count: 1 !important');
    expect(css).toContain('transition-duration: 0.01ms !important');
    expect(css).toContain('scroll-behavior: auto !important');
    expect(css).not.toContain('scale(0.9)');
    expect(css).toContain('var(--durations-slow) var(--easings-enter)');
  });
});
