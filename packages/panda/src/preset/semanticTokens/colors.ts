import { defineSemanticTokens } from '@pandacss/dev';

export const colors = defineSemanticTokens.colors({
  bg: {
    page: {
      value: {
        base: '{colors.shark.100}',
        _dark: '{colors.shark.800}',
      },
    },
    body: {},
    surface: {
      DEFAULT: {
        value: {
          base: '{colors.shark.100}',
          _dark: '{colors.shark.800}',
        },
      },
      invert: {},
      raise: {
        value: {
          base: '{colors.shark.200}',
          _dark: '{colors.shark.700}',
        },
      },
    },
    strong: {},
    subtle: {},
    muted: {},
    input: {
      DEFAULT: {
        value: {
          base: '{colors.shark.100}',
          _dark: '{colors.shark.700}',
        },
      },
      hover: {
        value: {
          base: '{colors.shark.200}',
          _dark: '{colors.shark.800}',
        },
      },
      focus: {},
      disabled: {},
    },
    primary: {
      DEFAULT: {
        value: {
          base: '{colors.blue.400}',
          _dark: '{colors.blue.600}',
        },
      },
      hover: {
        value: {
          base: '{colors.blue.700}',
          _dark: '{colors.blue.500}',
        },
      },
      subtle: {},
      'subtle-hover': {},
      active: {},
      disabled: {},
      muted: {},
    },
    success: {
      DEFAULT: {
        value: {
          base: '{colors.green.400}',
          _dark: '{colors.green.600}',
        },
      },
      hover: {},
      muted: {},
    },
    warning: {
      DEFAULT: {
        value: {
          base: '{colors.yellow.400}',
          _dark: '{colors.yellow.600}',
        },
      },
      hover: {},
      muted: {},
    },
    danger: {
      DEFAULT: {
        value: {
          base: '{colors.red.400}',
          _dark: '{colors.red.600}',
        },
      },
      hover: {
        value: {
          base: '{colors.red.700}',
          _dark: '{colors.red.500}',
        },
      },
      muted: {},
    },
    info: {
      DEFAULT: {
        value: {
          base: '{colors.blue.400}',
          _dark: '{colors.blue.600}',
        },
      },
      hover: {},
      muted: {},
    },
  },
  border: {
    DEFAULT: {
      value: {
        base: '{colors.shark.100}',
        _dark: '{colors.shark.700}',
      },
    },
    strong: {
      value: {
        base: '{colors.shark.100}',
        _dark: '{colors.shark.700}',
      },
    },
    subtle: {
      value: '{colors.shark.600}',
    },
    inactive: {
      value: {
        base: '{colors.shark.100}',
        _dark: '{colors.shark.700}',
      },
    },
    primary: {
      DEFAULT: {},
    },
    success: {
      DEFAULT: {
        DEFAULT: {
          value: {
            base: '{colors.green.400}',
            _dark: '{colors.green.600}',
          },
        },
      },
    },
    warning: {
      DEFAULT: {
        value: {
          base: '{colors.yellow.400}',
          _dark: '{colors.yellow.600}',
        },
      },
    },
    danger: {
      DEFAULT: {
        value: {
          base: '{colors.red.400}',
          _dark: '{colors.red.600}',
        },
      },
    },
    info: {
      DEFAULT: {},
    },
    input: {
      DEFAULT: {
        value: {
          base: '{colors.shark.200}',
          _dark: '{colors.shark.600}',
        },
      },
    },
    divider: {
      DEFAULT: {
        value: {
          base: '{colors.shark.200}',
          _dark: '{colors.shark.600}',
        },
      },
    },
  },
  icon: {},
  text: {
    DEFAULT: {
      value: {
        base: '{colors.black}',
        _dark: '{colors.white}',
      },
    },
    on: {
      primary: {
        value: {
          base: '{colors.white}',
          _dark: '{colors.white}',
        },
      },
      success: {
        value: {
          base: '{colors.white}',
          _dark: '{colors.white}',
        },
      },
      warning: {
        value: {
          base: '{colors.white}',
          _dark: '{colors.white}',
        },
      },
      danger: {
        value: {
          base: '{colors.white}',
          _dark: '{colors.white}',
        },
      },
    },
  },
});
