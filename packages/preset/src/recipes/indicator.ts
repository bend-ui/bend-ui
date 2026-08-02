import { defineSlotRecipe } from '@pandacss/dev';

export const indicatorRecipe = defineSlotRecipe({
  className: 'indicator',
  slots: ['root'],
  base: {
    root: {
      display: 'inline-block',
      size: 'indicator.xs',
      borderRadius: 'full',
    },
  },
  variants: {
    palette: {
      default: {
        root: {
          backgroundColor: 'fill',
        },
      },
      primary: {
        root: {
          backgroundColor: 'fill.primary',
        },
      },
    },
    size: {
      xs: {
        root: {
          width: 'indicator.xs',
          height: 'indicator.xs',
        },
      },
      sm: {
        root: {
          width: 'indicator.sm',
          height: 'indicator.sm',
        },
      },
      md: {
        root: {
          width: 'indicator.md',
          height: 'indicator.md',
        },
      },
    },
  },
  defaultVariants: {
    palette: 'default',
    size: 'xs',
  },
});
