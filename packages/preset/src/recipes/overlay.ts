import { defineRecipe } from '@pandacss/dev';

export const overlayRecipe = defineRecipe({
  description: 'Overlay styles',
  className: 'Overlay',
  base: {
    position: 'fixed',
    inset: 0,
    bgColor: 'neutral.950',
    opacity: '0.8',
    _open: {
      animation: 'overlay.in',
    },
    _closed: {
      animation: 'overlay.out',
    },
  },
});
