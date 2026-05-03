import { defineSemanticTokens } from '@pandacss/dev';

export const shadows = defineSemanticTokens.shadows({
  base: { value: '0 0 0 1px {colors.shadow}' },
  focusRing: { value: '0 0 0 2px {colors.primary}' },
  interaction: {
    neutral: {
      DEFAULT: {
        value: ['inset 0 1px 3px -1px {colors.neutral.200}'],
      },
    },
    primary: {
      DEFAULT: {
        value: ['inset 0 1px 3px -1px {colors.primary.200}'],
      },
    },
    danger: {
      DEFAULT: {
        value: ['inset 0 1px 3px -1px {colors.danger.200}'],
      },
    },
  },
  raised: {
    DEFAULT: {
      value: {
        _light: [
          '0 4px 8px -2px {colors.neutral.200}',
          '0 2px 4px -2px {colors.neutral.200}',
        ],
      },
    },
  },
  overlay: {
    DEFAULT: {
      value: {
        _light: [
          '0 20px 24px -4px {colors.neutral.200}',
          '0 8px 8px -4px {colors.neutral.200}',
        ],
      },
    },
  },
});
