import { defineSemanticTokens } from '@pandacss/dev';

export const colors = defineSemanticTokens.colors({
  bg: {
    page: {
      value: {
        _light: '{colors.neutral.100}',
        _dark: '{colors.neutral.900}',
      },
    },
    subtle: {
      value: {
        _light: '{colors.neutral.200}',
        _dark: '{colors.neutral.800}',
      },
    },
    surface: {
      DEFAULT: {
        value: {
          _light: '{colors.neutral.50}',
          _dark: '{colors.neutral.900}',
        },
      },
      raise: {
        value: {
          _light: '{colors.neutral.200}',
          _dark: '{colors.neutral.800}',
        },
      },
    },
    hover: {
      DEFAULT: {
        value: {
          _light: '{colors.neutral.100}',
          _dark: '{colors.neutral.700}',
        },
      },
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
  },
  text: {
    DEFAULT: {
      value: {
        _light: '{colors.black}',
        _dark: '{colors.white}',
      },
    },
    subtle: {
      value: {
        _light: '{colors.gray.500}',
        _dark: '{colors.gray.400}',
      },
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
  fg: {
    danger: {
      DEFAULT: {
        value: {
          _light: '{colors.red.400}',
          _dark: '{colors.red.600}',
        },
      },
      subtle: {
        value: {
          _light: '{colors.red.200}',
          _dark: '{colors.red.600}',
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
          _light: '{colors.red.200}',
          _dark: '{colors.red.600}',
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
          _light: '{colors.red.200}',
          _dark: '{colors.red.600}',
        },
      },
    },
  },
  neutral: {
    DEFAULT: {
      value: '{colors.shark.500}',
    },
    50: {
      value: '{colors.shark.50}',
    },
    100: {
      value: '{colors.shark.100}',
    },
    200: {
      value: '{colors.shark.200}',
    },
    300: {
      value: '{colors.shark.300}',
    },
    400: {
      value: '{colors.shark.400}',
    },
    500: {
      value: '{colors.shark.500}',
    },
    600: {
      value: '{colors.shark.600}',
    },
    700: {
      value: '{colors.shark.700}',
    },
    800: {
      value: '{colors.shark.800}',
    },
    900: {
      value: '{colors.shark.900}',
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
    fg: {
      value: '{colors.white}',
    },
    text: {
      value: '{colors.denim.400}',
    },
    border: {
      value: {
        _light: '{colors.denim.400}',
        _dark: '{colors.denim.600}',
      },
    },
    disabled: {
      value: 'black',
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
        _light: '{colors.red.400}',
        _dark: '{colors.red.600}',
      },
    },
    fg: {
      value: '{colors.white}',
    },
    text: {
      value: 'green',
    },
    border: {
      value: 'yellow',
    },
    disabled: {
      value: 'black',
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
  success: {
    DEFAULT: {
      value: {
        _light: '{colors.green.400}',
        _dark: '{colors.green.600}',
      },
    },
  },
  shadow: {
    value: {
      _light: '{colors.shark.100}',
      _dark: '{colors.shark.900}',
    },
  },
  focusRing: {
    DEFAULT: {
      value: {
        _light: '{colors.primary}',
        _dark: '{colors.primary}',
      },
    },
    neutral: {
      value: {
        _light: '{colors.gray.400}/14',
        _dark: '{colors.gray.600}/14',
      },
    },
    danger: {
      value: {
        _light: '{colors.danger}/24',
        _dark: '{colors.danger}/24',
      },
    },
  },
});
