import { defineSemanticTokens } from '@pandacss/dev';
import { error, info, neutral, primary, success, warning } from './tones';

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
    ...neutral.fill,
    primary: primary.fill,
    error: error.fill,
    warning: warning.fill,
    success: success.fill,
    info: info.fill,
  },
  text: {
    ...neutral.text,
    primary: primary.text,
    error: error.text,
    warning: warning.text,
    success: success.text,
    info: info.text,
  },
  stroke: {
    ...neutral.stroke,
    primary: primary.stroke,
    error: error.stroke,
    warning: warning.stroke,
    success: success.stroke,
    info: info.stroke,
  },
  icon: {
    ...neutral.icon,
    primary: primary.icon,
    error: error.icon,
    warning: warning.icon,
    success: success.icon,
    info: info.icon,
  },
  neutral,
  primary,
  error,
  warning,
  success,
  info,
  shadow: {
    value: '{colors.neutral.100}',
  },
  input: {
    fill: {
      value: '{colors.fill.weak}',
    },
    stroke: {
      value: '{colors.stroke.weak}',
    },
  },
  divider: {
    stroke: {
      value: '{colors.stroke.weak}',
    },
  },
});
