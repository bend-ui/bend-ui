import { defineSlotRecipe } from '@pandacss/dev';

export const inputRecipe = defineSlotRecipe({
  slots: ['root', 'wrapper', 'input', 'icon', 'element', 'addon'],
  description: 'Input styles',
  className: 'Input',
  base: {
    root: {
      rounded: 'control',
      transitionProperty: 'colors, border-color, background-color',
      transitionDuration: 'fast',
      transitionTimingFunction: 'default',
      divideX: 'base',
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
          height: 'control.sm',
        },
        wrapper: {
          paddingInline: 'sm',
          gap: 'xs',
        },
      },
      md: {
        input: {
          height: 'control.md',
        },
        wrapper: {
          paddingInline: 'md',
          gap: 'sm',
        },
        icon: {
          width: '5',
          height: '5',
        },
        element: {},
        addon: {
          paddingInline: 'md',
        },
      },
      lg: {
        input: {
          height: 'control.lg',
        },
        wrapper: {
          paddingInline: 'lg',
          gap: 'md',
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
          shadow: 'surface',
        },
      },
    },
  },
  defaultVariants: {
    size: 'md',
    variant: 'outline',
  },
});
