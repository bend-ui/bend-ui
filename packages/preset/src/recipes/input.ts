import { defineSlotRecipe } from '@pandacss/dev';

export const inputRecipe = defineSlotRecipe({
  slots: ['root', 'wrapper', 'input', 'icon', 'element', 'addon'],
  description: 'Input styles',
  className: 'Input',
  base: {
    root: {
      rounded: 'lg',
      transitionProperty: 'colors, border-color, background-color',
      transitionDuration: 'fast',
      transitionTimingFunction: 'ease-in-out',
      divideX: '1px',
      _hover: {
        cursor: 'text',
      },
      _focusWithin: {
        layerStyle: 'focus',
      },
      _invalid: {
        border: 'danger',
      },
      _disabled: {
        opacity: 'state.disabled',
      },
    },
    wrapper: {
      '&[type="text"]': {
        cursor: 'text',
      },
    },
    input: {
      outline: 'none',
    },
    icon: {
      width: '1lh',
      height: '1lh',
      '& > svg': {
        width: '100%',
        height: '100%',
      },
    },
  },
  variants: {
    size: {
      sm: {
        input: {
          height: '8',
        },
        wrapper: {
          paddingInline: '2',
          gap: '1',
        },
      },
      md: {
        input: {
          height: '10',
        },
        wrapper: {
          paddingInline: '3',
          gap: '2',
        },
        icon: {
          width: '5',
          height: '5',
        },
        element: {},
        addon: {
          paddingInline: '3',
        },
      },
      lg: {
        input: {
          height: '12',
        },
        wrapper: {
          paddingInline: '4',
          gap: '3',
        },
      },
    },
    variant: {
      solid: {
        root: {
          backgroundColor: 'fill',
        },
      },
      outline: {
        root: {
          backgroundColor: 'fill',
          border: 'weak',
          divideColor: 'stroke.weak',
          shadow: 'xs',
        },
      },
    },
  },
  defaultVariants: {
    size: 'md',
    variant: 'outline',
  },
});
