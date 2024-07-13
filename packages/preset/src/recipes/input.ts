import { defineSlotRecipe } from '@pandacss/dev';
import { inputConfig } from '@particles/preset-base';

export const inputRecipe = defineSlotRecipe({
  description: 'Input styles',
  className: inputConfig.className,
  slots: inputConfig.slots,
  base: {
    root: {
      rounded: 'lg',
      border: '1px solid transparent',
      _focusWithin: {
        layerStyle: 'focus',
      },
    },
    label: {
      fontSize: 'md',
      fontWeight: 'bold',
    },
  },
  variants: {
    size: {
      md: {
        input: {
          py: 'sm',
          px: 'md',
          _hasIcon: {
            paddingInlineStart: '9',
          },
          _hasIconEnd: {
            paddingInlineEnd: '9',
          },
          _hasAddonStart: {
            paddingInlineStart: '0',
          },
          _hasAddonEnd: {
            paddingInlineEnd: '0',
          },
        },
        icon: {
          paddingInlineStart: '3',
        },
        iconEnd: {
          paddingInlineEnd: '3',
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
