import { defineRecipe } from '@pandacss/dev';

export const buttonGroupRecipe = defineRecipe({
  className: 'ButtonGroup',
  variants: {
    size: {
      sm: {
        gap: 'sm',
      },
      md: {
        gap: 'md',
      },
      lg: {
        gap: 'lg',
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },
});
