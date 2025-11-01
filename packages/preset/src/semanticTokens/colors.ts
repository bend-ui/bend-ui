import { defineSemanticTokens } from '@pandacss/dev';

export const colors = defineSemanticTokens.colors({
  bg: {
    DEFAULT: {
      value: '{colors.neutral.50}',
    },
    page: {
      value: '{colors.neutral.50}',
    },
    raised: {
      value: '{colors.neutral.50}',
    },
    overlay: {
      value: '{colors.neutral.50}',
    },
    sunken: {
      value: '{colors.neutral.50}',
    },
    alternate: {
      value: '{colors.neutral.50}',
    },
    inverse: {
      value: '{colors.neutral.950}',
    },
  },
  surface: {
    DEFAULT: {
      value: '{colors.neutral.100}',
    },
    strong: {
      value: '{colors.neutral.200}',
    },
    subtle: {
      value: '{colors.neutral.50}',
    },
    hover: {
      value: '{colors.neutral.100}',
    },
    pressed: {
      value: '{colors.neutral.50}',
    },
    selected: {
      value: '{colors.neutral.50}',
    },
    disabled: {
      value: '{colors.neutral.50}',
    },
    overlay: {
      value: '{colors.neutral.50}',
    },
  },
  text: {
    DEFAULT: {
      value: '{colors.neutral.950}',
    },
    strong: {
      value: '{colors.neutral.950}',
    },
    secondary: {
      value: '{colors.neutral.700}',
    },
    disabled: {
      value: '{colors.neutral.100}',
    },
    danger: {
      value: {
        _light: '{colors.danger.950}',
        _dark: '{colors.danger.50}',
      },
    },
    success: {
      value: {
        _light: '{colors.success.950}',
        _dark: '{colors.success.50}',
      },
    },
    warning: {
      value: {
        _light: '{colors.warning.950}',
        _dark: '{colors.warning.50}',
      },
    },
    info: {
      value: {
        _light: '{colors.info.950}',
        _dark: '{colors.info.50}',
      },
    },
    link: {
      DEFAULT: {},
      hover: {},
      active: {},
    },
    on: {
      primary: {
        value: {
          _light: '{colors.white}',
          _dark: '{colors.white}',
        },
      },
      success: {
        value: {
          _light: '{colors.white}',
          _dark: '{colors.white}',
        },
      },
      warning: {
        value: {
          _light: '{colors.white}',
          _dark: '{colors.white}',
        },
      },
      danger: {
        value: {
          _light: '{colors.white}',
          _dark: '{colors.white}',
        },
      },
    },
  },
  border: {
    DEFAULT: {
      value: '{colors.neutral.200}',
    },
    strong: {
      value: '{colors.neutral.300}',
    },
    subtle: {
      value: '{colors.neutral.200}',
    },
    selected: {
      value: '{colors.neutral.200}',
    },
    focus: {
      DEFAULT: {
        value: '{colors.neutral.200}',
      },
    },
    disabled: {
      value: '{colors.neutral.100}',
    },
    primary: {
      DEFAULT: {
        value: '{colors.primary.400}',
      },
    },
    success: {
      DEFAULT: {
        value: {
          _light: '{colors.success.400}',
          _dark: '{colors.success.600}',
        },
      },
    },
    warning: {
      DEFAULT: {
        value: {
          _light: '{colors.warning.400}',
          _dark: '{colors.warning.600}',
        },
      },
    },
    danger: {
      DEFAULT: {
        value: {
          _light: '{colors.danger.400}',
          _dark: '{colors.danger.600}',
        },
      },
    },
    info: {
      DEFAULT: {
        value: {
          _light: '{colors.info.400}',
          _dark: '{colors.info.600}',
        },
      },
    },
    input: {
      DEFAULT: {
        value: {
          _light: '{colors.neutral.200}',
          _dark: '{colors.neutral.600}',
        },
      },
    },
    divider: {
      DEFAULT: {
        value: {
          _light: '{colors.neutral.200}',
          _dark: '{colors.neutral.600}',
        },
      },
    },
  },
  icon: {
    DEFAULT: {
      value: '{colors.neutral.950}',
    },
    disabled: {
      value: '{colors.neutral.100}',
    },
    inverse: {
      DEFAULT: {
        value: '{colors.neutral.50}',
      },
      strong: {
        value: '{colors.neutral.950}',
      },
      disabled: {
        value: '{colors.neutral.100}',
      },
    },
  },
  neutral: {
    hover: {
      value: '{colors.neutral.400}',
    },
    fg: {
      value: '{colors.neutral.900}',
    },
    text: {
      value: '{colors.neutral.900}',
    },
    border: {
      value: '{colors.neutral.300}',
    },
  },
  primary: {
    50: { value: '{colors.blue.50}' },
    100: { value: '{colors.blue.100}' },
    200: { value: '{colors.blue.200}' },
    300: { value: '{colors.blue.300}' },
    400: { value: '{colors.blue.400}' },
    500: { value: '{colors.blue.500}' },
    600: { value: '{colors.blue.600}' },
    700: { value: '{colors.blue.700}' },
    800: { value: '{colors.blue.800}' },
    900: { value: '{colors.blue.900}' },
    950: { value: '{colors.blue.950}' },
    DEFAULT: {
      value: {
        _light: '{colors.primary.500}',
        _dark: '{colors.primary.600}',
      },
    },
    hover: {
      value: {
        _light: '{colors.primary.600}',
        _dark: '{colors.primary.700}',
      },
    },
    fg: {
      value: '{colors.white}',
    },
    text: {
      value: '{colors.primary.800}',
    },
    border: {
      value: {
        _light: '{colors.primary.400}',
        _dark: '{colors.primary.600}',
      },
    },
    disabled: {
      value: 'black',
    },
    fill: {
      value: '{colors.primary.400}',
    },
    surface: {
      value: '{colors.primary.300}',
    },
  },
  danger: {
    50: { value: '{colors.red.50}' },
    100: { value: '{colors.red.100}' },
    200: { value: '{colors.red.200}' },
    300: { value: '{colors.red.300}' },
    400: { value: '{colors.red.400}' },
    500: { value: '{colors.red.500}' },
    600: { value: '{colors.red.600}' },
    700: { value: '{colors.red.700}' },
    800: { value: '{colors.red.800}' },
    900: { value: '{colors.red.900}' },
    950: { value: '{colors.red.950}' },
    DEFAULT: {
      value: {
        _light: '{colors.red.400}',
        _dark: '{colors.red.600}',
      },
    },
    hover: {
      value: {
        _light: '{colors.danger.500}',
        _dark: '{colors.danger.700}',
      },
    },
    fg: {
      value: '{colors.white}',
    },
    text: {
      value: '{colors.danger.600}',
    },
    border: {
      value: '{colors.danger.600}',
    },
    disabled: {
      value: 'black',
    },
    fill: {
      value: '{colors.danger.400}',
    },
    surface: {
      value: '{colors.danger.300}',
    },
  },
  warning: {
    50: { value: '{colors.yellow.50}' },
    100: { value: '{colors.yellow.100}' },
    200: { value: '{colors.yellow.200}' },
    300: { value: '{colors.yellow.300}' },
    400: { value: '{colors.yellow.400}' },
    500: { value: '{colors.yellow.500}' },
    600: { value: '{colors.yellow.600}' },
    700: { value: '{colors.yellow.700}' },
    800: { value: '{colors.yellow.800}' },
    900: { value: '{colors.yellow.900}' },
    950: { value: '{colors.yellow.950}' },
    DEFAULT: {
      value: {
        _light: '{colors.yellow.400}',
        _dark: '{colors.yellow.600}',
      },
    },
    fg: {
      value: '{colors.warning.950}',
    },
    text: {
      value: '{colors.warning.600}',
    },
    border: {
      value: '{colors.warning.400}',
    },
    fill: {
      value: '{colors.warning.400}',
    },
    surface: {
      value: '{colors.warning.100}',
    },
  },
  success: {
    50: { value: '{colors.green.50}' },
    100: { value: '{colors.green.100}' },
    200: { value: '{colors.green.200}' },
    300: { value: '{colors.green.300}' },
    400: { value: '{colors.green.400}' },
    500: { value: '{colors.green.500}' },
    600: { value: '{colors.green.600}' },
    700: { value: '{colors.green.700}' },
    800: { value: '{colors.green.800}' },
    900: { value: '{colors.green.900}' },
    950: { value: '{colors.green.950}' },
    DEFAULT: {
      value: {
        _light: '{colors.green.400}',
        _dark: '{colors.green.600}',
      },
    },
    hover: {
      value: {
        _light: '{colors.success.400}',
        _dark: '{colors.success.600}',
      },
    },
    fg: {
      value: '{colors.success.950}',
    },
    text: {
      value: '{colors.success.600}',
    },
    border: {
      value: '{colors.success.400}',
    },
    fill: {
      value: '{colors.success.400}',
    },
    surface: {
      value: '{colors.success.300}',
    },
  },
  info: {
    50: { value: '{colors.blue.50}' },
    100: { value: '{colors.blue.100}' },
    200: { value: '{colors.blue.200}' },
    300: { value: '{colors.blue.300}' },
    400: { value: '{colors.blue.400}' },
    500: { value: '{colors.blue.500}' },
    600: { value: '{colors.blue.600}' },
    700: { value: '{colors.blue.700}' },
    800: { value: '{colors.blue.800}' },
    900: { value: '{colors.blue.900}' },
    950: { value: '{colors.blue.950}' },
    DEFAULT: {
      value: {
        _light: '{colors.blue.400}',
        _dark: '{colors.blue.600}',
      },
    },
    hover: {
      value: {
        _light: '{colors.blue.400}',
        _dark: '{colors.blue.600}',
      },
    },
    fg: {
      value: '{colors.blue.950}',
    },
    text: {
      value: '{colors.blue.600}',
    },
    border: {
      value: '{colors.blue.400}',
    },
    fill: {
      value: '{colors.blue.400}',
    },
    surface: {
      value: '{colors.blue.300}',
    },
  },
  shadow: {
    value: '{colors.neutral.100}',
  },
});
