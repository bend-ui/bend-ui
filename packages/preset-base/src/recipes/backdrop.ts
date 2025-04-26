import { defineRecipe } from '@pandacss/dev';

export const backdropRecipe = defineRecipe({
  className: 'Backdrop',
  base: {
    height: '100vh',
    left: '0',
    position: 'fixed',
    top: '0',
    width: '100vw',
    zIndex: 'overlay',
  },
});
