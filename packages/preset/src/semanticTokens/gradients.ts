import { defineSemanticTokens } from '@pandacss/dev';

export const gradients = defineSemanticTokens.gradients({
  neutral: {
    DEFAULT: {
      value: {
        _light: {
          type: 'linear',
          placement: 'to bottom',
          stops: ['{colors.white}', '{colors.neutral.50}'],
        },
        _dark: {
          type: 'linear',
          placement: 'to bottom',
          stops: ['{colors.neutral.900}', '{colors.neutral.950}'],
        },
      },
    },
  },
  primary: {
    DEFAULT: {
      value: {
        type: 'linear',
        placement: 'to bottom',
        stops: ['{colors.primary.500}', '{colors.primary.600}'],
      },
    },
  },
});
