import { defineSlotRecipe } from '@pandacss/dev';

export const drawer = defineSlotRecipe({
  slots: ['root', 'content'],
  className: 'Drawer',
  base: {
    root: {
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'center',
      left: '0',
      overflow: 'auto',
      position: 'fixed',
      top: '0',
      width: '100vw',
      height: '100dvh',
      zIndex: 'modal',
    },
    content: {
      position: 'fixed',
    },
  },
  variants: {
    placement: {
      left: {
        content: {
          top: 0,
          left: 0,
          bottom: 0,
        },
      },
      right: {
        content: {
          top: 0,
          right: 0,
          bottom: 0,
        },
      },
      top: {
        content: {
          top: 0,
          left: 0,
          right: 0,
        },
      },
      bottom: {
        content: {
          left: 0,
          right: 0,
          bottom: 0,
        },
      },
    },
  },
  defaultVariants: {
    placement: 'right',
  },
});
