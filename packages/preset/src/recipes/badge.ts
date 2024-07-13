import { defineSlotRecipe } from '@pandacss/dev';
import { badgeConfig } from '@particles/preset-base';

export const badgeRecipe = defineSlotRecipe({
  className: badgeConfig.className,
  slots: badgeConfig.slots,
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
