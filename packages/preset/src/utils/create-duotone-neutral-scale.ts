import { colorRamp, type ColorRamp } from './create-color-scale';

const lightModeRamp: Record<ColorRamp, ColorRamp> = {
  50: '50',
  100: '100',
  200: '200',
  300: '300',
  400: '400',
  500: '50',
  600: '200',
  700: '400',
  800: '600',
  900: '800',
  950: '950',
};

const reverseRamp: Record<ColorRamp, ColorRamp> = {
  50: '950',
  100: '900',
  200: '800',
  300: '700',
  400: '600',
  500: '500',
  600: '400',
  700: '300',
  800: '200',
  900: '100',
  950: '50',
};

/**
 * Builds a neutral semantic scale from the light and dark halves of a theme's
 * named color pair. This keeps canvas and text colors inside the personality
 * instead of introducing an unrelated gray ramp.
 */
export const createDuotoneNeutralScale = (
  lightColor: string,
  darkColor: string,
) => {
  const lightValues = Object.fromEntries(
    colorRamp.map((shade) => {
      const color = Number(shade) < 500 ? lightColor : darkColor;
      return [shade, `{colors.${color}.${lightModeRamp[shade]}}`];
    }),
  ) as Record<ColorRamp, string>;

  return Object.fromEntries(
    colorRamp.map((shade) => [
      shade,
      {
        value: {
          _light: lightValues[shade],
          _dark: lightValues[reverseRamp[shade]],
        },
      },
    ]),
  );
};
