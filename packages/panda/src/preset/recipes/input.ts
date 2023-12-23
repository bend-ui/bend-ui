import { defineSlotRecipe } from '@pandacss/dev';

export const inputRecipe = defineSlotRecipe({
  description: 'Input styles',
  className: 'input',
  slots: ['root', 'label', 'icon', 'input', 'addonStart', 'addonEnd'],
  base: {
    root: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      gap: 'sm',
      rounded: 'lg',
      border: '1px solid transparent',
    },
    label: {
      fontSize: 'md',
      fontWeight: 'bold',
    },
    input: {
      flex: '1 1 auto',
      appearance: 'none',
      backgroundColor: 'transparent',
      py: 'sm',
      px: 'md',
    },
  },
  variants: {
    size: {
      md: {
        input: {},
      },
    },
    variant: {
      solid: {
        root: {
          backgroundColor: 'bg.input',
          _hover: {
            backgroundColor: 'bg.input.hover',
          },
        },
      },
      outline: {
        root: {
          border: 'input',
        },
      },
    },
  },
  defaultVariants: {
    size: 'md',
    variant: 'outline',
  },
});
