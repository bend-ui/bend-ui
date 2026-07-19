import { defineSlotRecipe } from '@pandacss/dev';

export const buttonGroupRecipe = defineSlotRecipe({
  slots: ['root', 'button'],
  className: 'ButtonGroup',
  variants: {
    size: {
      sm: {
        root: {
          gap: 'sm',
        },
      },
      md: {
        root: {
          gap: 'md',
        },
      },
      lg: {
        root: {
          gap: 'lg',
        },
      },
    },
    isAttached: {
      true: {
        root: {
          gap: '0',
        },
        button: {
          _first: {
            roundedTopRight: '0',
            roundedBottomRight: '0',
            borderRightWidth: '0',
          },
          _last: {
            roundedTopLeft: '0',
            roundedBottomLeft: '0',
            borderLeftWidth: '0',
          },
          _notFirst: {
            roundedTopLeft: '0',
            roundedBottomLeft: '0',
          },
          _notLast: {
            roundedTopRight: '0',
            roundedBottomRight: '0',
          },
        },
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },
});
