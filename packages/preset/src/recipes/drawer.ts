import { defineSlotRecipe } from '@pandacss/dev';

export const drawerRecipe = defineSlotRecipe({
  className: 'drawer',
  slots: [
    'root',
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
      padding: 'lg',
      layerStyle: 'panelRaised',
    },
    header: {
      padding: 'md',
      borderBottom: '1px solid',
      borderColor: 'neutral.900',
    },
    close: {
      position: 'absolute',
      top: 'md',
      right: 'md',
    },
    footer: {
      padding: 'md',
      borderTop: '1px solid',
      borderColor: 'neutral.900',
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
          top: 0,
          bottom: 0,
          left: 0,
          roundedRight: 'lg',
          roundedLeft: '0',
          width: '90vw',
          maxW: '450px',
          height: 'screen',
          _open: {
            animation: 'slideInLeft 300ms ease-out',
          },
          _closed: {
            animation: 'slideOutLeft 300ms ease-out',
          },
        },
      },
      right: {
        content: {
          top: 0,
          bottom: 0,
          right: 0,
          roundedLeft: 'lg',
          roundedRight: '0',
          width: '90vw',
          maxW: '450px',
          height: 'screen',
          _open: {
            animation: 'slideInRight 300ms ease-out',
          },
          _closed: {
            animation: 'slideOutRight 300ms ease-out',
          },
        },
      },
      top: {
        content: {
          width: 'screen',
          height: '90vw',
          maxH: '450px',
          top: 0,
          left: 0,
          right: 0,
          _open: {
            animation: 'slideInTop 300ms ease-out',
          },
          _closed: {
            animation: 'slideOutTop 300ms ease-out',
          },
        },
      },
      bottom: {
        content: {
          width: 'screen',
          height: '90vw',
          maxH: '450px',
          bottom: 0,
          left: 0,
          right: 0,
          _open: {
            animation: 'slideInBottom 300ms ease-out',
          },
          _closed: {
            animation: 'slideOutBottom 300ms ease-out',
          },
        },
      },
    },
  },
  defaultVariants: {
    placement: 'right',
  },
});
