import { defineSemanticTokens } from '@pandacss/dev';
import { danger, info, neutral, primary, success, warning } from './tones';

/** Reference canonical role leaves, flattening DEFAULT to its containing path. */
const aliasRole = <T extends object>(tokens: T, path: string): T =>
  Object.fromEntries(
    Object.entries(tokens).map(([key, token]) => {
      const tokenPath = key === 'DEFAULT' ? path : `${path}.${key}`;
      return [
        key,
        'value' in token
          ? { value: `{colors.${tokenPath}}` }
          : aliasRole(token, tokenPath),
      ];
    }),
  ) as T;

/** Preserve a tone's ramp while routing its role trees to canonical values. */
const aliasTone = (name: string, tone: typeof primary) => ({
  ...tone,
  ...Object.fromEntries(
    (['fill', 'text', 'stroke', 'icon'] as const).map((role) => [
      role,
      aliasRole(tone[role], name === 'neutral' ? role : `${role}.${name}`),
    ]),
  ),
});

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
  neutral: aliasTone('neutral', neutral),
  primary: aliasTone('primary', primary),
  danger: aliasTone('danger', danger),
  warning: aliasTone('warning', warning),
  success: aliasTone('success', success),
  info: aliasTone('info', info),
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
