import { defineRecipe } from '@pandacss/dev';

export const backdropRecipe = defineRecipe({
  className: 'Backdrop',
  base: {
    backdropFilter: 'blur(10px)',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    _open: {
      animation: 'backdrop-in',
    },
    _closed: {
      animation: 'backdrop-out',
    },
  },
});
