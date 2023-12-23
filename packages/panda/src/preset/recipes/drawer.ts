import { defineSlotRecipe } from '@pandacss/dev';

export const drawerRecipe = defineSlotRecipe({
  className: 'drawer',
  slots: ['root', 'trigger', 'overlay', 'content', 'header', 'close', 'footer'],
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
      width: '90vw',
      maxW: '450px',
      height: 'full',
      padding: 'lg',
      layerStyle: 'panelRaised',
      _open: {
        animation: 'fadeIn 200ms ease-out',
      },
      _closed: {
        animation: 'fadeOut 300ms ease-out',
      },
    },
  },
  variants: {
    placement: {
      left: {
        content: {
          top: 0,
          left: 0,
          roundedRight: 'lg',
          roundedLeft: '0',
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
          right: 0,
          roundedLeft: 'lg',
          roundedRight: '0',
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
          transform: 'translateY(-100%)',
          top: 0,
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
          transform: 'translateY(100%)',
          bottom: 0,
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
