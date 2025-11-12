import { ColorRamp } from './create-color-scale';

export const createNeutralScale = (
  neutralColor: string,
  defaultNeutralColor: ColorRamp = '500',
) => {
  return {
    DEFAULT: {
      value: `{colors.neutral.${defaultNeutralColor}}`,
    },
    50: {
      value: {
        _light: `{colors.${neutralColor}.50}`,
        _dark: `{colors.${neutralColor}.950}`,
      },
    },
    100: {
      value: {
        _light: `{colors.${neutralColor}.100}`,
        _dark: `{colors.${neutralColor}.900}`,
      },
    },
    200: {
      value: {
        _light: `{colors.${neutralColor}.200}`,
        _dark: `{colors.${neutralColor}.800}`,
      },
    },
    300: {
      value: {
        _light: `{colors.${neutralColor}.300}`,
        _dark: `{colors.${neutralColor}.700}`,
      },
    },
    400: {
      value: {
        _light: `{colors.${neutralColor}.400}`,
        _dark: `{colors.${neutralColor}.600}`,
      },
    },
    500: {
      value: {
        _light: `{colors.${neutralColor}.500}`,
        _dark: `{colors.${neutralColor}.500}`,
      },
    },
    600: {
      value: {
        _light: `{colors.${neutralColor}.600}`,
        _dark: `{colors.${neutralColor}.400}`,
      },
    },
    700: {
      value: {
        _light: `{colors.${neutralColor}.700}`,
        _dark: `{colors.${neutralColor}.300}`,
      },
    },
    800: {
      value: {
        _light: `{colors.${neutralColor}.800}`,
        _dark: `{colors.${neutralColor}.200}`,
      },
    },
    900: {
      value: {
        _light: `{colors.${neutralColor}.900}`,
        _dark: `{colors.${neutralColor}.100}`,
      },
    },
    950: {
      value: {
        _light: `{colors.${neutralColor}.950}`,
        _dark: `{colors.${neutralColor}.50}`,
      },
    },
  };
};
