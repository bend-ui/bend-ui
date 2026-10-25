import { defineSlotRecipe } from '@pandacss/dev';

export const textareaRecipe = defineSlotRecipe({
  className: 'Textarea',
  slots: ['root', 'field'],
  base: {
    root: {
      rounded: 'control',
      borderWidth: 'base',
      borderStyle: 'solid',
      borderColor: 'transparent',
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
            borderColor: 'stroke.danger',
          },
        },
      },
      outline: {
        root: {
          border: 'input',
          '&:has(:invalid, [data-invalid])': {
            borderColor: 'stroke.danger',
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
