import { defineSlotRecipe } from '@pandacss/dev';

export const badgeRecipe = defineSlotRecipe({
  slots: ['root'],
  className: 'Badge',
  base: {
    root: {
      fontSize: 'xs',
      lineHeight: 'none',
      fontWeight: 'medium',
      rounded: 'sm',
      paddingX: 'sm',
      paddingY: 'xs',
      color: 'white',
    },
  },
  variants: {
    variant: {
      solid: {
        root: { backgroundColor: 'colorPalette.fill' },
      },
      subtle: {
        root: { backgroundColor: 'colorPalette.fill.weak' },
      },
      outline: {
        root: { borderColor: 'colorPalette.stroke' },
      },
    },
    palette: {
      default: {
        root: {
          colorPalette: 'neutral',
        },
      },
      primary: {
        root: {
          colorPalette: 'primary',
        },
      },
      danger: {
        root: {
          colorPalette: 'danger',
        },
      },
      warning: {
        root: {
          colorPalette: 'warning',
        },
      },
      success: {
        root: {
          colorPalette: 'success',
        },
      },
      info: {
        root: {
          colorPalette: 'info',
        },
      },
    },
  },
  defaultVariants: {
    variant: 'solid',
    palette: 'primary',
  },
});
