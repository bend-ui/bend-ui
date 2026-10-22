import { defineSlotRecipe } from '@pandacss/dev';

export const tagRecipe = defineSlotRecipe({
  className: 'Tag',
  description: 'A tag style',
  slots: ['root', 'label', 'closeButton', 'startContent', 'endContent'],
  base: {
    root: {
      borderRadius: 'control',
    },
  },
  variants: {
    size: {
      sm: {
        root: {
          minHeight: 'control.sm',
          textStyle: 'sm',
          px: 'sm',
        },
      },
      md: {
        root: {
          minHeight: 'control.md',
          textStyle: 'md',
          px: 'md',
        },
      },
      lg: {
        root: {
          minHeight: 'control.lg',
          textStyle: 'lg',
          px: 'lg',
        },
      },
    },
    variant: {
      solid: {
        root: {
          color: 'colorPalette.text.inverse',
          backgroundColor: 'colorPalette.fill',
        },
      },
      outline: {
        root: {
          backgroundColor: 'transparent',
          border: 'colorPalette.stroke',
        },
      },
      subtle: {
        root: {
          color: 'colorPalette.text',
          backgroundColor: 'colorPalette.fill.weak',
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
  defaultVariants: {
    size: 'md',
    variant: 'solid',
    palette: 'default',
  },
});
