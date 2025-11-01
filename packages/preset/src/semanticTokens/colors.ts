import { defineSemanticTokens } from '@pandacss/dev';
import { error, info, primary, success, warning } from './tones';

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
  fill: {
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
    primary: primary.fill,
    error: error.fill,
    warning: warning.fill,
    success: success.fill,
    info: info.fill,
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
    primary: primary.text,
    error: error.text,
    warning: warning.text,
    success: success.text,
    info: info.text,
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
    primary: primary.stroke,
    error: error.stroke,
    warning: warning.stroke,
    success: success.stroke,
    info: info.stroke,
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
    primary: primary.icon,
    error: error.icon,
    warning: warning.icon,
    success: success.icon,
    info: info.icon,
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
  primary,
  error,
  warning,
  success,
  info,
  shadow: {
    value: '{colors.neutral.100}',
  },
});
