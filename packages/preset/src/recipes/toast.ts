import { defineSlotRecipe } from '@pandacss/dev';

export const toastRecipe = defineSlotRecipe({
  className: 'toast',
  slots: ['root', 'viewport'],
  base: {
    root: {
      layerStyle: 'panelRaised',
      padding: 'md',
    },
    viewport: {
      position: 'fixed',
      top: 'auto',
      bottom: '0',
      right: '0',
      maxH: 'full',
      width: 'full',
      display: 'flex',
      p: 'sm',
    },
  },
});
