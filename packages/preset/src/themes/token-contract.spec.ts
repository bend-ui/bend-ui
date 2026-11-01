import { describe, expect, it } from 'vitest';
import { createTheme } from './create-theme';
import { colors } from '../semanticTokens/colors';
import { colorRamp } from '../utils/create-color-scale';

type TokenTree = { [key: string]: TokenTree | { value: unknown } };

describe('semantic token customization contract', () => {
  it('routes the legacy error palette option through danger and its compatibility aliases', () => {
    const palette = createTheme({
      errorColor: 'purple',
      defaultErrorColor: '700',
    }).semanticTokens?.colors as Record<
      string,
      Record<string, { value: unknown }>
    >;

    expect(palette.danger.DEFAULT.value).toBe('{colors.purple.700}');
    for (const shade of colorRamp) {
      expect(palette.danger[shade].value).toBe(`{colors.purple.${shade}}`);
      expect(palette.error[shade].value).toBe(`{colors.danger.${shade}}`);
    }
    expect(palette.error.DEFAULT.value).toBe('{colors.danger}');
  });

  it('rebinds danger role trees within each selected Theme scope', () => {
    const palette = createTheme({ errorColor: 'purple' }).semanticTokens
      ?.colors as unknown as Record<string, Record<string, unknown>>;
    for (const role of ['fill', 'text', 'stroke', 'icon'] as const) {
      expect(palette[role].danger).toEqual(colors[role].danger);
      expect(palette.danger[role]).toEqual(colors.danger[role]);
    }
    expect(palette.fill.danger).toMatchObject({
      DEFAULT: { value: '{colors.danger.500}' },
    });
    expect(palette.stroke.danger).toMatchObject({
      DEFAULT: { value: '{colors.danger.500}' },
    });
  });

  it('makes every tone-first leaf follow its canonical role-first override', () => {
    const tokens = colors as unknown as Record<
      string,
      Record<string, TokenTree>
    >;
    for (const tone of [
      'neutral',
      'primary',
      'danger',
      'warning',
      'success',
      'info',
    ]) {
      for (const role of ['fill', 'text', 'stroke', 'icon']) {
        const check = (tree: TokenTree, path: string[]) => {
          for (const [key, token] of Object.entries(tree)) {
            const next = key === 'DEFAULT' ? path : [...path, key];
            if ('value' in token)
              expect(token.value).toBe(`{${next.join('.')}}`);
            else check(token as TokenTree, next);
          }
        };
        check(tokens[tone][role], [
          'colors',
          role,
          ...(tone === 'neutral' ? [] : [tone]),
        ]);
      }
    }
  });

  it('preserves independent light and dark neutral aliases', () => {
    const palette = createTheme({ neutralColor: 'slate' }).semanticTokens
      ?.colors as unknown as Record<string, Record<string, TokenTree>>;
    expect(palette.neutral['50'].value).toEqual({
      _light: '{colors.slate.50}',
      _dark: '{colors.slate.950}',
    });
  });
});
