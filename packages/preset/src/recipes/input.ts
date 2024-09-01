import { defineSlotRecipe } from '@pandacss/dev';

export const inputRecipe = defineSlotRecipe({
  description: 'Input styles',
  className: 'Input',
  slots: ['root', 'icon', 'iconEnd', 'input', 'addonStart', 'addonEnd'],
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
