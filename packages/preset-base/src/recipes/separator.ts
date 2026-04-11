import { defineRecipe } from '@pandacss/dev';

export const separator = defineRecipe({
  className: 'Separator',
  base: {},
  variants: {
    orientation: {
      horizontal: {},
      vertical: {},
    },
  },
  defaultVariants: {
    orientation: 'horizontal',
  },
});
