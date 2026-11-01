import { ColorRamp } from './create-color-scale';

export const createNeutralScale = (
  neutralColor: string | Record<ColorRamp, { value: string }>,
  defaultNeutralColor: ColorRamp = '500',
) => {
  const color = (shade: ColorRamp) =>
    typeof neutralColor === 'string'
      ? `{colors.${neutralColor}.${shade}}`
      : neutralColor[shade].value;
  return {
    DEFAULT: {
      value: `{colors.neutral.${defaultNeutralColor}}`,
    },
    50: {
      value: {
        _light: color('50'),
        _dark: color('950'),
      },
    },
    100: {
      value: {
        _light: color('100'),
        _dark: color('900'),
      },
    },
    200: {
      value: {
        _light: color('200'),
        _dark: color('800'),
      },
    },
    300: {
      value: {
        _light: color('300'),
        _dark: color('700'),
      },
    },
    400: {
      value: {
        _light: color('400'),
        _dark: color('600'),
      },
    },
    500: {
      value: {
        _light: color('500'),
        _dark: color('500'),
      },
    },
    600: {
      value: {
        _light: color('600'),
        _dark: color('400'),
      },
    },
    700: {
      value: {
        _light: color('700'),
        _dark: color('300'),
      },
    },
    800: {
      value: {
        _light: color('800'),
        _dark: color('200'),
      },
    },
    900: {
      value: {
        _light: color('900'),
        _dark: color('100'),
      },
    },
    950: {
      value: {
        _light: color('950'),
        _dark: color('50'),
      },
    },
  };
};
