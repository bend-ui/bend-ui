import { describe, expect, it } from 'vitest';
import { colorRamp } from '../utils/create-color-scale';
import { namedThemeColors } from '../tokens/theme-colors';
import { personalityThemes } from './personality-themes';
import {
  themePersonalities,
  themePersonalityIds,
} from './personalities';

const parseOklch = (value: string) => {
  const match = value.match(
    /^oklch\(([\d.]+) ([\d.]+) ([\d.]+)(?: \/ [\d.]+)?\)$/,
  );

  if (!match) throw new Error(`Invalid OKLCH color: ${value}`);

  return {
    lightness: Number(match[1]),
    chroma: Number(match[2]),
    hue: Number(match[3]),
  };
};

const toLinearSrgb = (value: string) => {
  const { lightness, chroma, hue } = parseOklch(value);
  const radians = (hue * Math.PI) / 180;
  const a = chroma * Math.cos(radians);
  const b = chroma * Math.sin(radians);
  const lRoot = lightness + 0.3963377774 * a + 0.2158037573 * b;
  const mRoot = lightness - 0.1055613458 * a - 0.0638541728 * b;
  const sRoot = lightness - 0.0894841775 * a - 1.291485548 * b;
  const l = lRoot ** 3;
  const m = mRoot ** 3;
  const s = sRoot ** 3;

  return [
    4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s,
    -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s,
    -0.0041960863 * l - 0.7034186147 * m + 1.707614701 * s,
  ];
};

const apcaLuminance = (value: string) => {
  const [red, green, blue] = toLinearSrgb(value);
  const luminance =
    0.2126729 * red + 0.7151522 * green + 0.072175 * blue;

  return luminance < 0.022
    ? luminance + (0.022 - luminance) ** 1.414
    : luminance;
};

const apcaContrast = (foreground: string, background: string) => {
  const text = apcaLuminance(foreground);
  const canvas = apcaLuminance(background);

  if (canvas > text) {
    const contrast = (canvas ** 0.56 - text ** 0.57) * 1.14;
    return contrast < 0.1 ? 0 : (contrast - 0.027) * 100;
  }

  const contrast = (canvas ** 0.65 - text ** 0.62) * 1.14;
  return contrast > -0.1 ? 0 : (contrast + 0.027) * 100;
};

const wcagContrast = (foreground: string, background: string) => {
  const luminance = (value: string) => {
    const [red, green, blue] = toLinearSrgb(value);
    return 0.2126 * red + 0.7152 * green + 0.0722 * blue;
  };
  const foregroundLuminance = luminance(foreground);
  const backgroundLuminance = luminance(background);
  const lighter = Math.max(foregroundLuminance, backgroundLuminance);
  const darker = Math.min(foregroundLuminance, backgroundLuminance);

  return (lighter + 0.05) / (darker + 0.05);
};

describe('named theme colors', () => {
  it('preserves every supplied color name and source value', () => {
    expect(
      Object.values(namedThemeColors).map(({ name, source }) => [name, source]),
    ).toEqual([
      ['Signal Blue', '#0057FF'],
      ['Porcelain', '#F8F7F4'],
      ['Butter Yellow', '#FFF275'],
      ['Royal Iris', '#3A0CA3'],
      ['Lime Spark', '#B6FF2E'],
      ['Graphite', '#23262F'],
      ['Dragonfruit', '#FF4696'],
      ['Night Violet', '#1E1033'],
      ['Emerald Ink', '#064E3B'],
      ['Champagne', '#F8E7C9'],
      ['Ultra Violet', '#6A00F4'],
      ['Soft Apricot', '#FFD6A5'],
    ]);
  });

  it('provides an eleven-step, constant-hue, sRGB-safe OKLCH ramp', () => {
    for (const color of Object.values(namedThemeColors)) {
      expect(Object.keys(color.scale)).toEqual(colorRamp);

      const hues = Object.values(color.scale).map(
        (value) => parseOklch(value).hue,
      );
      expect(new Set(hues)).toHaveLength(1);

      for (const value of Object.values(color.scale)) {
        for (const channel of toLinearSrgb(value)) {
          expect(channel).toBeGreaterThanOrEqual(-0.00001);
          expect(channel).toBeLessThanOrEqual(1.00001);
        }
      }
    }
  });
});

describe('theme personalities', () => {
  it('publishes the canonical, readonly personality order', () => {
    expect(themePersonalityIds).toEqual([
      'stratus',
      'solstice',
      'volt',
      'nebula',
      'canopy',
      'aster',
    ]);
    expect(Object.isFrozen(themePersonalityIds)).toBe(true);
    expect(Object.isFrozen(themePersonalities)).toBe(true);
    expect(Object.keys(themePersonalities)).toEqual(themePersonalityIds);
  });

  it('registers every personality as a Panda theme variant', () => {
    expect(Object.keys(personalityThemes)).toEqual(
      Object.keys(themePersonalities),
    );

    for (const theme of Object.values(personalityThemes)) {
      expect(theme.semanticTokens?.colors).toBeDefined();
      expect(theme.semanticTokens?.fonts).toBeDefined();
      expect(theme.semanticTokens?.letterSpacings).toBeDefined();
      expect(theme.semanticTokens?.radii).toBeDefined();
      expect(theme.semanticTokens?.borderWidths).toBeDefined();
      expect(theme.semanticTokens?.shadows).toBeDefined();
      expect(theme.semanticTokens?.sizes).toBeDefined();
      expect(theme.semanticTokens?.spacing).toBeDefined();
      expect(theme.semanticTokens?.durations).toBeDefined();
      expect(theme.semanticTokens?.easings).toBeDefined();
    }
  });

  it('keeps primary text above the APCA normal-text threshold in every state', () => {
    for (const personality of Object.values(themePersonalities)) {
      const primary = namedThemeColors[personality.primary];
      const foreground =
        namedThemeColors[personality.onPrimary.color].scale[
          personality.onPrimary.shade
        ];

      for (const shade of Object.values(personality.primaryStates)) {
        const contrast = Math.abs(
          apcaContrast(foreground, primary.scale[shade]),
        );
        expect(
          contrast,
          `${personality.name} ${shade} has APCA Lc ${contrast.toFixed(1)}`,
        ).toBeGreaterThanOrEqual(60);
      }
    }
  });

  it('keeps primary text at WCAG AA contrast in every state', () => {
    for (const personality of Object.values(themePersonalities)) {
      const primary = namedThemeColors[personality.primary];
      const foreground =
        namedThemeColors[personality.onPrimary.color].scale[
          personality.onPrimary.shade
        ];

      for (const shade of Object.values(personality.primaryStates)) {
        const contrast = wcagContrast(foreground, primary.scale[shade]);
        expect(
          contrast,
          `${personality.name} ${shade} has WCAG contrast ${contrast.toFixed(2)}`,
        ).toBeGreaterThanOrEqual(4.5);
      }
    }
  });
});
