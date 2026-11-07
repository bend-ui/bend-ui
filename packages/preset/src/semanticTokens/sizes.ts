import { defineSemanticTokens } from '@pandacss/dev';

export const sizes = defineSemanticTokens.sizes({
  control: {
    DEFAULT: { value: '2.5rem' },
    sm: { value: 'calc({sizes.control} - 0.5rem)' },
    lg: { value: 'calc({sizes.control} + 0.5rem)' },
  },
});
