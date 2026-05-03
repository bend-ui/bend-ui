import { defineSemanticTokens } from '@pandacss/dev';
import { danger, info, neutral, primary, success, warning } from './tones';

export const colors = defineSemanticTokens.colors({
  bg: {
    DEFAULT: {
      value: '{colors.neutral.50}',
    },
    page: {
      value: '{colors.neutral.50}',
    },
    raised: {
      value: '{colors.neutral.100}',
    },
    overlay: {
      value: '{colors.neutral.100}',
    },
    sunken: {
      value: '{colors.neutral.50}',
    },
    alternate: {
      value: '{colors.neutral.100}',
    },
    inverse: {
      value: '{colors.neutral.950}',
    },
  },
  fill: {
    ...neutral.fill,
    primary: primary.fill,
    danger: danger.fill,
    warning: warning.fill,
    success: success.fill,
    info: info.fill,
    white: {
      value: '{colors.white}',
    },
    yellow: {
      value: '{colors.yellow.500}',
    },
  },
  text: {
    ...neutral.text,
    primary: primary.text,
    danger: danger.text,
    warning: warning.text,
    success: success.text,
    info: info.text,
  },
  stroke: {
    ...neutral.stroke,
    primary: primary.stroke,
    danger: danger.stroke,
    warning: warning.stroke,
    success: success.stroke,
    info: info.stroke,
  },
  icon: {
    ...neutral.icon,
    primary: primary.icon,
    danger: danger.icon,
    warning: warning.icon,
    success: success.icon,
    info: info.icon,
  },
  neutral,
  primary,
  danger,
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
