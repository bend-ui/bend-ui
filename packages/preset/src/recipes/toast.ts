import { defineSlotRecipe } from '@pandacss/dev';

export const toastRecipe = defineSlotRecipe({
  className: 'Toast',
  slots: [
    'root',
    'viewport',
    'title',
    'description',
    'closeTrigger',
    'actionTrigger',
  ],
  base: {
    root: {
      layerStyle: 'panelRaised',
      padding: 'md',
      minWidth: 'sm',
      _open: {
        animation: 'panel.in',
      },
      _closed: {
        animation: 'panel.out',
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
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      padding: 'sm',
      borderRadius: 'md',
      _hover: {
        bg: 'gray.100',
      },
    },
  },
});
