export const colorRamp = [
  '50',
  '100',
  '200',
  '300',
  '400',
  '500',
  '600',
  '700',
  '800',
  '900',
  '950',
] as const;

export type ColorRamp = (typeof colorRamp)[number];

export const createColorScale = (colorName: string, defaultShade: string) => {
  return {
    DEFAULT: {
      value: `{colors.${colorName}.${defaultShade}}`,
    },
    ...colorRamp.reduce(
      (acc, shade) => {
        acc[shade] = {
          value: `{colors.${colorName}.${shade}}`,
        };
        return acc;
      },
      {} as Record<number, { value: string }>,
    ),
  };
};
