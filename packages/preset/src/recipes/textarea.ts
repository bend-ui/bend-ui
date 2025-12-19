import { defineSlotRecipe } from '@pandacss/dev';

export const textareaRecipe = defineSlotRecipe({
  className: 'Textarea',
  slots: ['root', 'field'],
  base: {
    root: {
      rounded: 'lg',
      border: '1px solid transparent',
      _focusWithin: {
        layerStyle: 'focus',
      },
    },
  },
  variants: {
    size: {
      md: {
        field: {
          py: 'sm',
          px: 'md',
        },
      },
    },
    variant: {
      solid: {
        root: {
          backgroundColor: 'bg.input',
          _hover: {
            backgroundColor: 'bg.input.hover',
          },
          '&:has(:invalid, [data-invalid])': {
            borderColor: 'stroke.error',
          },
        },
      },
      outline: {
        root: {
          border: 'input',
          '&:has(:invalid, [data-invalid])': {
            borderColor: 'stroke.error',
          },
        },
      },
    },
  },
  defaultVariants: {
    size: 'md',
    variant: 'outline',
  },
});
