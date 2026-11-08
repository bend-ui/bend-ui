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
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: 'transparent',
    },
  },
  variants: {
    variant: {
      solid: {
        root: {
          backgroundColor: 'colorPalette.fill.active',
          color: 'colorPalette.text.inverse.strong',
        },
      },
      subtle: {
        root: {
          backgroundColor: 'colorPalette.fill.weaker',
          color: 'colorPalette.text',
        },
      },
      outline: {
        root: {
          borderColor: 'colorPalette.stroke',
          color: 'text',
          backgroundColor: 'transparent',
        },
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
  compoundVariants: [
    {
      palette: 'default',
      variant: 'solid',
      css: { root: { backgroundColor: 'text.strong', color: 'bg.page' } },
    },
    {
      palette: 'warning',
      variant: 'solid',
      css: {
        root: {
          backgroundColor: 'colorPalette.fill.weak',
          color: 'colorPalette.text',
        },
      },
    },
  ],
  defaultVariants: {
    variant: 'solid',
    palette: 'primary',
  },
});
