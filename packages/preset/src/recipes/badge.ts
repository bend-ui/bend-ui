import { defineSlotRecipe } from '@pandacss/dev';

export const badgeRecipe = defineSlotRecipe({
  className: 'badge',
  slots: ['root'],
  base: {
    root: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 'xs',
      lineHeight: 'none',
      fontWeight: 'medium',
      borderRadius: 'sm',
      paddingX: 'sm',
      paddingY: 'xs',
      color: 'white',
    },
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
  },
  defaultVariants: {
    palette: 'primary',
  },
});
