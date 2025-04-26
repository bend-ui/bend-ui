import { defineParts, defineRecipe } from '@pandacss/dev';

const parts = defineParts({
  root: { selector: '&' },
  content: { selector: '& [data-part="content"]' },
});

export const drawer = defineRecipe({
  className: 'Drawer',
  base: parts({
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
  }),
  variants: {
    placement: {
      left: parts({
        content: {
          top: 0,
          left: 0,
          bottom: 0,
        },
      }),
      right: parts({
        content: {
          top: 0,
          right: 0,
          bottom: 0,
        },
      }),
      top: parts({
        content: {
          top: 0,
          left: 0,
          right: 0,
        },
      }),
      bottom: parts({
        content: {
          left: 0,
          right: 0,
          bottom: 0,
        },
      }),
    },
  },
  defaultVariants: {
    placement: 'right',
  },
});
