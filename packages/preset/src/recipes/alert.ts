import { defineSlotRecipe } from '@pandacss/dev';

export const alertRecipe = defineSlotRecipe({
  className: 'alert',
  slots: ['root', 'icon', 'title', 'message'],
  base: {
    root: {
      padding: 'md',
      borderRadius: 'base',
      display: 'flex',
      alignItems: 'center',
      gap: 'md',
    },
    icon: {
      fontSize: '2xl',
    },
    title: {
      fontWeight: 'bold',
    },
    message: {},
  },
  variants: {
    palette: {
      default: {
        root: {
          backgroundColor: 'bg.surface',
        },
      },
      primary: {
        root: {
          backgroundColor: 'bg.primary',
        },
      },
      danger: {
        root: {
          backgroundColor: 'bg.danger',
        },
      },
      warning: {
        root: {
          backgroundColor: 'bg.warning',
        },
      },
      success: {
        root: {
          backgroundColor: 'bg.success',
        },
      },
      info: {
        root: {
          backgroundColor: 'bg.info',
        },
      },
    },
    variant: {
      solid: {
        root: {},
      },
      subtle: {
        root: {
          boxShadow: 'base',
        },
      },
      outline: {
        root: {
          boxShadow: 'base',
          border: 'base',
        },
      },
    },
  },
  defaultVariants: {
    palette: 'default',
  },
});
