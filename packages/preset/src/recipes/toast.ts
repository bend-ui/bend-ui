import { defineSlotRecipe } from '@pandacss/dev';

export const toastRecipe = defineSlotRecipe({
  slots: ['root', 'viewport', 'title', 'description', 'closeTrigger'],
  className: 'Toast',
  base: {
    root: {
      layerStyle: 'surface.raised',
      padding: 'md',
      minWidth: 'sm',
      _open: {
        animation: 'dialog-in',
      },
      _closed: {
        animation: 'dialog-out',
      },
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
    title: {
      textStyle: 'title',
    },
    description: {
      textStyle: 'body',
    },
    closeTrigger: {
      position: 'absolute',
      top: 'sm',
      right: 'sm',
    },
  },
});
