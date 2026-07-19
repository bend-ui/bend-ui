import { defineSlotRecipe } from '@pandacss/dev';

export const modalRecipe = defineSlotRecipe({
  slots: [
    'overlay',
    'content',
    'header',
    'close',
    'footer',
    'title',
    'description',
    'positioner',
    'action',
    'cancel',
  ],
  description: 'Modal styles',
  className: 'Modal',
  base: {
    overlay: {
      position: 'fixed',
      inset: 0,
      bgColor: 'neutral.950/80',
      _open: {
        animation: 'overlay.in',
      },
      _closed: {
        animation: 'overlay.out',
      },
    },
    content: {
      position: 'fixed',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%)',
      width: '90vw',
      maxW: '450px',
      maxH: '85vh',
      layerStyle: 'surface.overlay',
      padding: 'lg',
      rounded: 'lg',
      _open: {
        animation: 'panel.in',
      },
      _closed: {
        animation: 'panel.out',
      },
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      mb: 'lg',
    },
    footer: {},
    close: {
      position: 'absolute',
      top: '10px',
      right: '10px',
    },
    title: {
      textStyle: 'title',
    },
    description: {
      textStyle: 'body',
    },
  },
  jsx: ['Modal', 'AlertDialog', 'Dialog'],
});
