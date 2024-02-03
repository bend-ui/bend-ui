import { defineTokens } from '@pandacss/dev';

export const animations = defineTokens.animations({
  overlay: {
    in: {
      value: 'overlayIn 200ms ease-out',
    },
    out: {
      value: 'overlayOut 300ms ease-out',
    },
  },
});
