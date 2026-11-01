import { describe, expect, it } from 'vitest';
import { createOklchRamp } from './create-oklch-ramp';
import { createTheme } from '../themes/create-theme';
import { colorRamp } from './create-color-scale';

// Independent OKLab inverse transform; channels remain linear for luminance.
const linearRgb = (css: string) => {
  const match = /^oklch\(([\d.]+) ([\d.]+) ([\d.]+)\)$/.exec(css);
  if (!match) throw new Error(`Unexpected color: ${css}`);
  const [lightness, chroma, hue] = match.slice(1).map(Number);
  const a = chroma * Math.cos((hue * Math.PI) / 180);
  const b = chroma * Math.sin((hue * Math.PI) / 180);
  const l = (lightness + 0.3963377774 * a + 0.2158037573 * b) ** 3;
  const m = (lightness - 0.1055613458 * a - 0.0638541728 * b) ** 3;
  const s = (lightness - 0.0894841775 * a - 1.291485548 * b) ** 3;
  return {
    lightness,
    channels: [
      4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s,
      -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s,
      -0.0041960863 * l - 0.7034186147 * m + 1.707614701 * s,
    ],
  };
};
const luminance = (css: string) => {
  const [r, g, b] = linearRgb(css).channels;
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};

describe('generated OKLCH ramps', () => {
  it.each([0, 30, 90, 150, 195, 240, 285, 359])(
    'keeps hue %s smooth, ordered and inside sRGB after formatting',
    (hue) => {
      const ramp = createOklchRamp({ hue, chroma: 0.3 });
      expect(Object.keys(ramp)).toEqual([...colorRamp]);
      const steps = colorRamp.map((shade) => linearRgb(ramp[shade].value));
      for (const [index, step] of steps.entries()) {
        for (const channel of step.channels) {
          expect(channel).toBeGreaterThanOrEqual(-0.00001);
          expect(channel).toBeLessThanOrEqual(1.00001);
        }
        if (index) {
          const gap = steps[index - 1].lightness - step.lightness;
          expect(gap).toBeGreaterThan(0);
          expect(gap).toBeLessThan(0.15);
        }
      }
      const ratio =
        (luminance(ramp['50'].value) + 0.05) /
        (luminance(ramp['950'].value) + 0.05);
      expect(ratio).toBeGreaterThan(4.5);
    },
  );

  it.each([
    { hue: NaN },
    { hue: Infinity },
    { hue: 10, chroma: -0.1 },
    { hue: 10, curve: 0 },
    { hue: 10, curve: NaN },
  ])('rejects invalid options %j', (options) => {
    expect(() => createOklchRamp(options)).toThrow();
  });

  it('keeps explicitly chosen neutral tint independent of primary hue', () => {
    const theme = (hue: number) =>
      createTheme({
        generatedColors: {
          primary: { hue },
          neutralTint: { hue: 80, chroma: 0.01 },
        },
      });
    const first = theme(20).semanticTokens?.colors;
    const second = theme(260).semanticTokens?.colors;
    expect(first?.neutral).toEqual(second?.neutral);
    expect(first?.primary).not.toEqual(second?.primary);
  });
  it('derives neutral hue from brand unless independently configured and reverses all mode steps', () => {
    const theme = createTheme({ generatedColors: { primary: { hue: 262 } } });
    const neutral = theme.semanticTokens?.colors?.neutral as Record<
      string,
      { value: { _light: string; _dark: string } }
    >;
    const expected = createOklchRamp({ hue: 262, chroma: 0.012 });
    colorRamp.forEach((shade, index) => {
      expect(neutral[shade].value._light).toBe(expected[shade].value);
      expect(neutral[shade].value._dark).toBe(
        expected[colorRamp[10 - index]].value,
      );
    });
  });

  it.each([-0.01, 0.041, NaN, Infinity])(
    'rejects invalid neutral tint chroma %s',
    (chroma) => {
      expect(() =>
        createTheme({
          generatedColors: { primary: { hue: 30 }, neutralTint: { chroma } },
        }),
      ).toThrow();
    },
  );

  it('wraps equivalent hues and changes the lightness curve without changing endpoints', () => {
    expect(createOklchRamp({ hue: -30 })).toEqual(
      createOklchRamp({ hue: 330 }),
    );
    const gentle = createOklchRamp({ hue: 30, curve: 0.5 });
    const steep = createOklchRamp({ hue: 30, curve: 2 });
    expect(gentle['50']).toEqual(steep['50']);
    expect(gentle['950']).toEqual(steep['950']);
    expect(gentle['500']).not.toEqual(steep['500']);
  });
});
