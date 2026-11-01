import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { loadConfig } from '@pandacss/dev/node';

const directory = mkdtempSync(join(tmpdir(), 'bend-interactions-'));
let theme: NonNullable<
  Awaited<ReturnType<typeof loadConfig>>['config']['theme']
>;
beforeAll(async () => {
  const file = join(directory, 'panda.config.ts');
  const preset = fileURLToPath(new URL('./index.ts', import.meta.url));
  writeFileSync(
    file,
    `import { createBendPreset } from ${JSON.stringify(preset)};\nexport default { presets: [createBendPreset()] };\n`,
  );
  const resolved = (await loadConfig({ cwd: process.cwd(), file })).config
    .theme;
  if (!resolved) throw new Error('Composed preset must define a theme');
  theme = resolved;
});
afterAll(() => rmSync(directory, { recursive: true, force: true }));

describe('composed interaction treatments', () => {
  it('keeps focus independent of elevation, with an opaque outline', () => {
    const focus = theme.layerStyles?.focus?.DEFAULT as {
      value: Record<string, unknown>;
    };
    expect(focus.value).toMatchObject({
      outlineStyle: 'solid',
      outlineColor: 'stroke.focus',
      outlineWidth: '2px',
    });
    expect(focus.value).not.toHaveProperty('boxShadow');
    for (const name of ['raised', 'overlay']) {
      expect(theme.layerStyles?.surface?.[name]).toMatchObject({
        value: { boxShadow: name },
      });
      expect(theme.semanticTokens?.shadows?.[name]).toMatchObject({
        DEFAULT: {
          value: { _light: expect.any(Array), _dark: expect.any(Array) },
        },
      });
    }
  });

  it('uses shared canonical roles for every Button treatment and gates press motion', () => {
    const button = theme.slotRecipes?.button;
    expect(button?.base?.root).not.toHaveProperty('_active');
    expect(button?.base?.root).toMatchObject({
      _notDisabled: { _motionSafe: { _active: { transform: 'scale(0.96)' } } },
    });
    for (const name of [
      'primary',
      'secondary',
      'tertiary',
      'danger',
      'inverse',
    ]) {
      const root = button?.variants?.variant?.[name]?.root;
      expect(root).not.toHaveProperty('_hover');
      expect(root).toMatchObject({
        _notDisabled: {
          _hover: expect.any(Object),
          _active: expect.any(Object),
          _pressed: expect.any(Object),
          _selected: expect.any(Object),
        },
      });
    }
  });

  it('keeps the Input boundary below state rules in the same cascade layer', () => {
    const input = theme.slotRecipes?.input;
    expect(input?.base?.root).toMatchObject({ border: 'strong' });
    for (const name of ['solid', 'outline']) {
      expect(input?.variants?.variant?.[name]?.root).not.toHaveProperty(
        'border',
      );
    }
  });

  it('styles both Menu item slots for navigation, selection and disabled state', () => {
    const base = theme.slotRecipes?.menu?.base;
    for (const slot of ['item', 'checkboxItem']) {
      expect(base?.[slot]).toMatchObject({
        _disabled: { color: 'text.disabled' },
        _focusVisible: { layerStyle: 'focus' },
        _notDisabled: {
          _highlighted: expect.any(Object),
          _checked: expect.any(Object),
          _selected: expect.any(Object),
        },
      });
    }
  });
});
