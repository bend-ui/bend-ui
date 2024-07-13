import { defineSlotRecipe } from '@pandacss/dev';

export const indicatorRecipe = defineSlotRecipe({
  className: 'indicator',
  slots: ['root'],
  base: {
    root: {
      display: 'inline-block',
      size: 'xs',
      borderRadius: 'full',
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
    },
    size: {
      xs: {
        root: {
          width: 'xs',
          height: 'xs',
        },
      },
      sm: {
        root: {
          width: 'sm',
          height: 'sm',
        },
      },
      md: {
        root: {
          width: 'md',
          height: 'md',
        },
      },
    },
  },
  defaultVariants: {
    palette: 'default',
    size: 'xs',
  },
});
