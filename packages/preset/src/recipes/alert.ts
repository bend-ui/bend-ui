import { defineSlotRecipe } from '@pandacss/dev';

export const alertRecipe = defineSlotRecipe({
  slots: ['root', 'icon', 'title', 'content', 'footer', 'dismiss'],
  className: 'Alert',
  base: {
    root: {
      padding: 'md',
      borderRadius: 'surface',
      gap: 'md',
      borderWidth: 'base',
      borderStyle: 'solid',
    },
    icon: {
      h: '1lh',
    },
    title: {
      textStyle: 'body',
      fontWeight: 'bold',
    },
    content: {},
    footer: {},
    dismiss: {},
  },
  variants: {
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
    variant: {
      solid: {
        root: {
          color: 'colorPalette.text.inverse',
          backgroundColor: 'colorPalette.fill',
          borderColor: 'colorPalette.stroke',
        },
      },
      subtle: {
        root: {
          color: 'colorPalette.text',
          backgroundColor: 'colorPalette.fill.weak',
          borderColor: 'colorPalette.stroke',
        },
      },
      outline: {
        root: {
          borderColor: 'colorPalette.stroke',
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
