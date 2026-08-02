import { defineSlotRecipe } from '@pandacss/dev';

export const drawerRecipe = defineSlotRecipe({
  slots: [
    'root',
    'content',
    'header',
    'closeTrigger',
    'footer',
    'title',
    'description',
  ],
  className: 'Drawer',
  base: {
    content: {
      padding: 'lg',
      layerStyle: 'surface.overlay',
    },
    header: {
      padding: 'md',
      borderBottom: 'weak',
    },
    closeTrigger: {
      position: 'absolute',
      top: 'sm',
      right: 'sm',
    },
    footer: {
      padding: 'md',
      borderTop: 'weak',
    },
    title: {
      textStyle: 'title',
    },
    description: {
      textStyle: 'body',
    },
  },
  variants: {
    placement: {
      left: {
        content: {
          roundedRight: 'overlay',
          roundedLeft: '0',
          width: '90vw',
          maxW: '450px',
          height: 'screen',
          _open: {
            animation: 'drawer-in-left',
          },
          _closed: {
            animation: 'drawer-out-left',
          },
        },
      },
      right: {
        content: {
          roundedLeft: 'overlay',
          roundedRight: '0',
          width: '90vw',
          maxW: '450px',
          height: 'screen',
          _open: {
            animation: 'drawer-in-right',
          },
          _closed: {
            animation: 'drawer-out-right',
          },
        },
      },
      top: {
        content: {
          width: 'screen',
          height: '90vw',
          maxH: '450px',
          _open: {
            animation: 'drawer-in-top',
          },
          _closed: {
            animation: 'drawer-out-top',
          },
        },
      },
      bottom: {
        content: {
          width: 'screen',
          height: '90vw',
          maxH: '450px',
          _open: {
            animation: 'drawer-in-bottom',
          },
          _closed: {
            animation: 'drawer-out-bottom',
          },
        },
      },
    },
  },
  defaultVariants: {
    placement: 'right',
  },
});
