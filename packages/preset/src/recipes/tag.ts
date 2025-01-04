import { defineSlotRecipe } from '@pandacss/dev';

export const tagRecipe = defineSlotRecipe({
  className: 'Tag',
  description: 'A tag style',
  slots: ['root', 'label', 'closeButton', 'startContent', 'endContent'],
  base: {
    root: {
      borderRadius: 'md',
    },
  },
  variants: {
    size: {
      sm: {
        root: {
          textStyle: 'sm',
          px: 'sm',
        },
      },
      md: {
        root: {
          textStyle: 'md',
          px: 'md',
        },
      },
      lg: {
        root: {
          textStyle: 'lg',
          px: 'lg',
        },
      },
    },
    variant: {
      solid: {
        root: {
          backgroundColor: 'primary',
        },
      },
      outline: {
        root: {
          backgroundColor: 'transparent',
          border: 'primary',
        },
      },
      subtle: {
        root: {
          backgroundColor: 'primary',
        },
      },
    },
  },
  defaultVariants: {
    size: 'md',
    variant: 'solid',
  },
});
