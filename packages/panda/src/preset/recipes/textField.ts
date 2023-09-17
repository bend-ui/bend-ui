import { defineSlotRecipe } from '@pandacss/dev';

export const textFieldRecipe = defineSlotRecipe({
  description: 'TextField styles',
  className: 'TextField',
  slots: ['root', 'label', 'icon', 'input'],
  base: {
    root: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'sm',
    },
    label: {
      fontSize: 'md',
      fontWeight: 'bold',
    },
    input: {
      appearance: 'none',
      py: 'sm',
      px: 'md',
      rounded: 'lg',
      layerStyle: 'element',
    },
  },
  variants: {
    size: {
      md: {
        input: {},
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },
});
