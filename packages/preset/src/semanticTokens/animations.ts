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
  panel: {
    in: {
      value: 'fadeIn 200ms ease-out',
    },
    out: {
      value: 'fadeOut 300ms ease-out',
    },
  },
  'accordion-down': { value: 'accordion-down 0.2s ease-out' },
  'accordion-up': { value: 'accordion-up 0.2s ease-out' },
});
