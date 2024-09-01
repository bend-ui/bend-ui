import { defineSlotRecipe } from '@pandacss/dev';

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
