import { defineParts, defineRecipe } from '@pandacss/dev';

const parts = defineParts({
  root: { selector: '&' },
});

export const badgeRecipe = defineRecipe({
  className: 'Badge',
  base: parts({
    root: {
      fontSize: 'xs',
      lineHeight: 'none',
      fontWeight: 'medium',
      rounded: 'sm',
      paddingX: 'sm',
      paddingY: 'xs',
      color: 'white',
    },
  }),
  variants: {
    variant: {
      solid: parts({
        root: { backgroundColor: 'colorPalette.fill' },
      }),
      subtle: parts({
        root: { backgroundColor: 'colorPalette.fill.weak' },
      }),
      outline: parts({
        root: { borderColor: 'colorPalette.stroke' },
      }),
    },
    palette: {
      default: parts({
        root: {
          colorPalette: 'neutral',
        },
      }),
      primary: parts({
        root: {
          colorPalette: 'primary',
        },
      }),
      danger: parts({
        root: {
          colorPalette: 'error',
        },
      }),
      warning: parts({
        root: {
          colorPalette: 'warning',
        },
      }),
      success: parts({
        root: {
          colorPalette: 'success',
        },
      }),
      info: parts({
        root: {
          colorPalette: 'info',
        },
      }),
    },
  },
  defaultVariants: {
    variant: 'solid',
    palette: 'primary',
  },
});
