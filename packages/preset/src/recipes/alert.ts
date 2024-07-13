import { defineSlotRecipe } from '@pandacss/dev';

export const alertRecipe = defineSlotRecipe({
  className: 'Alert',
  slots: ['root', 'icon', 'title', 'content', 'footer'],
  base: {
    root: {
      padding: 'md',
      borderRadius: 'base',
      gap: 'md',
      border: 'base',
    },
    icon: {
      fontSize: 'lg',
      padding: 'sm',
    },
    title: {
      textStyle: 'body',
      fontWeight: 'bold',
    },
    content: {},
  },
  variants: {
    palette: {
      default: {
        root: {
          colorPalette: 'bg.surface',
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
    variant: {
      solid: {
        root: {
          backgroundColor: 'colorPalette',
        },
      },
      subtle: {
        root: {
          backgroundColor: 'colorPalette/24',
        },
      },
      outline: {
        root: {
          borderWidth: '1px',
          borderStyle: 'solid',
          borderColor: 'colorPalette',
        },
        icon: {
          color: 'colorPalette',
        },
        title: {
          color: 'colorPalette',
        },
      },
    },
  },
  defaultVariants: {
    palette: 'default',
    variant: 'solid',
  },
});
