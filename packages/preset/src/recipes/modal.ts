import { defineSlotRecipe } from '@pandacss/dev';

export const modalRecipe = defineSlotRecipe({
  description: 'Modal styles',
  className: 'Modal',
  slots: ['root', 'trigger', 'overlay', 'content', 'header', 'close', 'footer'],
  base: {
    root: {},
    trigger: {},
    overlay: {
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
    content: {
      position: 'fixed',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%)',
      width: '90vw',
      maxW: '450px',
      maxH: '85vh',
      backgroundColor: 'bg.surface.raise',
      padding: 'lg',
      rounded: 'lg',
      _open: {
        animation: 'fadeIn 200ms ease-out',
      },
      _closed: {
        animation: 'fadeOut 300ms ease-out',
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
  },
});
