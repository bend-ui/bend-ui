import { defineParts, defineRecipe } from '@pandacss/dev';

const parts = defineParts({
  root: { selector: '&' },
  button: { selector: '& button' },
});

export const buttonGroupRecipe = defineRecipe({
  className: 'ButtonGroup',
  variants: {
    size: {
      sm: parts({
        root: {
          gap: 'sm',
        },
      }),
      md: parts({
        root: {
          gap: 'md',
        },
      }),
      lg: parts({
        root: {
          gap: 'lg',
        },
      }),
    },
    isAttached: {
      true: parts({
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
      }),
    },
  },
  defaultVariants: {
    size: 'md',
  },
});
