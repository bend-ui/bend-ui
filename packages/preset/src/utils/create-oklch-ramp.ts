import { colorRamp, type ColorRamp } from './create-color-scale';

export interface OklchRampOptions {
  /** Hue angle in degrees. Finite angles wrap into [0, 360). */
  hue: number;
  /** Maximum requested chroma at the middle of the ramp (0–0.4). */
  chroma?: number;
  /** Lightness distribution exponent (0.5–2); endpoints remain fixed. */
  curve?: number;
}

// OKLab -> linear sRGB, derived from the CSS Color 4 sample transforms:
// https://github.com/w3c/csswg-drafts/blob/main/css-color-4/conversions.js
// Testing linear channels avoids gamma encoding and preserves the gamut bounds.
const inSrgb = (lightness: number, chroma: number, hue: number) => {
  const angle = (hue * Math.PI) / 180;
  const a = chroma * Math.cos(angle);
  const b = chroma * Math.sin(angle);
  const l = (lightness + 0.3963377774 * a + 0.2158037573 * b) ** 3;
  const m = (lightness - 0.1055613458 * a - 0.0638541728 * b) ** 3;
  const s = (lightness - 0.0894841775 * a - 1.291485548 * b) ** 3;
  return [
    4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s,
    -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s,
    -0.0041960863 * l - 0.7034186147 * m + 1.707614701 * s,
  ].every((channel) => channel >= 0 && channel <= 1);
};

const round = (value: number) => Number(value.toFixed(3));

/** Generate an opt-in, fixed-hue sRGB ramp without changing bundled palettes. */
export const createOklchRamp = ({
  hue,
  chroma = 0.16,
  curve = 1.1,
}: OklchRampOptions): Record<ColorRamp, { value: string }> => {
  if (!Number.isFinite(hue)) throw new RangeError('hue must be finite');
  if (!Number.isFinite(chroma) || chroma < 0 || chroma > 0.4) {
    throw new RangeError('chroma must be between 0 and 0.4');
  }
  if (!Number.isFinite(curve) || curve < 0.5 || curve > 2) {
    throw new RangeError('curve must be between 0.5 and 2');
  }
  const normalizedHue = round(((hue % 360) + 360) % 360) % 360;
  return Object.fromEntries(
    colorRamp.map((shade, index) => {
      const progress = index / (colorRamp.length - 1);
      const lightness = round(0.98 - 0.86 * progress ** curve);
      const requested = chroma * Math.sin(Math.PI * progress);
      let low = 0;
      let high = requested;
      for (let iteration = 0; iteration < 24; iteration++) {
        const candidate = (low + high) / 2;
        if (inSrgb(lightness, candidate, normalizedHue)) low = candidate;
        else high = candidate;
      }
      // Recheck the actual serialized color: rounding upward can leave sRGB.
      let safeChroma = round(low);
      while (safeChroma > 0 && !inSrgb(lightness, safeChroma, normalizedHue)) {
        safeChroma = round(safeChroma - 0.001);
      }
      return [
        shade,
        { value: `oklch(${lightness} ${safeChroma} ${normalizedHue})` },
      ];
    }),
  ) as Record<ColorRamp, { value: string }>;
};
