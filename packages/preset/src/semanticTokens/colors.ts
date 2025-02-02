import { defineSemanticTokens } from '@pandacss/dev';

export const colors = defineSemanticTokens.colors({
  bg: {
    page: {
      value: {
        _light: '{colors.neutral.100}',
        _dark: '{colors.neutral.900}',
      },
    },
    surface: {
      DEFAULT: {
        value: {
          _light: '{colors.neutral.50}',
          _dark: '{colors.neutral.900}',
        },
      },
      hover: {},
      active: {},
      selected: {},
      disabled: {},
    },
    fill: {
      DEFAULT: {},
      hover: {},
      active: {},
      selected: {},
      disabled: {},
    },
    input: {
      DEFAULT: {
        value: {
          _light: '{colors.neutral.100}',
          _dark: '{colors.neutral.700}',
        },
      },
      hover: {
        value: {
          _light: '{colors.neutral.200}',
          _dark: '{colors.neutral.800}',
        },
      },
    },
    primary: {
      DEFAULT: {
        value: {
          _light: '{colors.denim.400}',
          _dark: '{colors.denim.600}',
        },
      },
      hover: {
        value: {
          _light: '{colors.denim.700}',
          _dark: '{colors.denim.500}',
        },
      },
    },
    success: {
      DEFAULT: {
        value: {
          _light: '{colors.green.400}',
          _dark: '{colors.green.600}',
        },
      },
    },
    warning: {
      DEFAULT: {
        value: {
          _light: '{colors.yellow.400}',
          _dark: '{colors.yellow.600}',
        },
      },
    },
    danger: {
      DEFAULT: {
        value: {
          _light: '{colors.red.400}',
          _dark: '{colors.red.600}',
        },
      },
      hover: {
        value: {
          _light: '{colors.red.700}',
          _dark: '{colors.red.500}',
        },
      },
    },
    info: {
      DEFAULT: {
        value: {
          _light: '{colors.denim.400}',
          _dark: '{colors.denim.600}',
        },
      },
    },
  },
  text: {
    DEFAULT: {
      value: {
        _light: '{colors.black}',
        _dark: '{colors.white}',
      },
    },
    secondary: {
      value: {
        _light: '{colors.gray.500}',
        _dark: '{colors.gray.400}',
      },
    },
    disabled: {},
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
      value: {
        _light: '{colors.shark.100}',
        _dark: '{colors.shark.700}',
      },
    },
    base: {
      value: {
        _light: '{colors.shark.100}',
        _dark: '{colors.shark.700}',
      },
    },
    hover: {},
    active: {},
    disabled: {},
    strong: {
      value: {
        _light: '{colors.shark.100}',
        _dark: '{colors.shark.700}',
      },
    },
    subtle: {
      value: '{colors.shark.600}',
    },
    inactive: {
      value: {
        _light: '{colors.shark.100}',
        _dark: '{colors.shark.700}',
      },
    },
    primary: {
      DEFAULT: {
        value: '{colors.denim.400}',
      },
    },
    success: {
      DEFAULT: {
        value: {
          _light: '{colors.green.400}',
          _dark: '{colors.green.600}',
        },
      },
    },
    warning: {
      DEFAULT: {
        value: {
          _light: '{colors.yellow.400}',
          _dark: '{colors.yellow.600}',
        },
      },
    },
    danger: {
      DEFAULT: {
        value: {
          _light: '{colors.red.400}',
          _dark: '{colors.red.600}',
        },
      },
    },
    info: {
      DEFAULT: {
        value: {
          _light: '{colors.denim.400}',
          _dark: '{colors.denim.600}',
        },
      },
    },
    input: {
      DEFAULT: {
        value: {
          _light: '{colors.shark.200}',
          _dark: '{colors.shark.600}',
        },
      },
    },
    divider: {
      DEFAULT: {
        value: {
          _light: '{colors.shark.200}',
          _dark: '{colors.shark.600}',
        },
      },
    },
    focus: {
      DEFAULT: {
        value: {
          _light: '{colors.shark.200}',
          _dark: '{colors.shark.600}',
        },
      },
    },
  },
  fg: {
    danger: {
      DEFAULT: {
        value: {
          _light: '{colors.danger.400}',
          _dark: '{colors.danger.600}',
        },
      },
      subtle: {
        value: {
          _light: '{colors.danger.200}',
          _dark: '{colors.danger.600}',
        },
      },
    },
    warning: {
      DEFAULT: {
        value: {
          _light: '{colors.warning}',
          _dark: '{colors.warning}',
        },
      },
      subtle: {
        value: {
          _light: '{colors.warning.200}',
          _dark: '{colors.warning.600}',
        },
      },
    },
    success: {
      DEFAULT: {
        value: {
          _light: '{colors.success}',
          _dark: '{colors.success}',
        },
      },
      subtle: {
        value: {
          _light: '{colors.success.200}',
          _dark: '{colors.success.600}',
        },
      },
    },
  },
  neutral: {
    DEFAULT: { value: '{colors.shark.500}' },
    50: { value: '{colors.shark.50}' },
    100: { value: '{colors.shark.100}' },
    200: { value: '{colors.shark.200}' },
    300: { value: '{colors.shark.300}' },
    400: { value: '{colors.shark.400}' },
    500: { value: '{colors.shark.500}' },
    600: { value: '{colors.shark.600}' },
    700: { value: '{colors.shark.700}' },
    800: { value: '{colors.shark.800}' },
    900: { value: '{colors.shark.900}' },
    950: { value: '{colors.shark.950}' },
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
        _light: '{colors.primary.400}',
        _dark: '{colors.primary.600}',
      },
    },
    hover: {
      value: {
        _light: '{colors.primary.600}',
        _dark: '{colors.primary.400}',
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
        _light: '{colors.danger.400}',
        _dark: '{colors.danger.600}',
      },
    },
    fg: {
      value: '{colors.white}',
    },
    text: {
      value: '{colors.danger.600}',
    },
    border: {
      value: '{colors.danger.400}',
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
  shadow: {
    value: {
      _light: '{colors.shark.100}',
      _dark: '{colors.shark.900}',
    },
  },
});
