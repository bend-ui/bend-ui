import { defineSlotRecipe } from '@pandacss/dev';

export const drawer = defineSlotRecipe({
  className: 'Drawer',
  slots: [
    'trigger',
    'overlay',
    'content',
    'header',
    'close',
    'footer',
    'title',
    'description',
  ],
  base: {
    overlay: {
      position: 'fixed',
      inset: 0,
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
});
