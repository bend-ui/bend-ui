import { defineSlotRecipe } from '@pandacss/dev';
import { subtle } from 'crypto';

export const badgeRecipe = defineSlotRecipe({
  className: 'Badge',
  slots: ['root'],
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
        root: { backgroundColor: 'colorPalette.surface' },
      },
      outline: {
        root: { borderColor: 'colorPalette.border' },
      },
    },
    palette: {
      default: {
        root: {
          colorPalette: 'bg',
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
