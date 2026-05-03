import { defineSemanticTokens } from '@pandacss/dev';

export const opacity = defineSemanticTokens.opacity({
  state: {
    disabled: {
      value: '0.5',
    },
  },
});
