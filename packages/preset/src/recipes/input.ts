import { defineParts, defineRecipe } from '@pandacss/dev';

const parts = defineParts({
  root: { selector: '&' },
  wrapper: { selector: '& [data-part="wrapper"]' },
  input: { selector: '& [data-part="input"]' },
  icon: { selector: '& [data-part="icon"]' },
  element: { selector: '& [data-part="element"]' },
  addon: { selector: '& [data-part="addon"]' },
});

export const inputRecipe = defineRecipe({
  description: 'Input styles',
  className: 'Input',
  base: parts({
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
  }),
  variants: {
    size: {
      sm: parts({
        input: {
          height: '8',
        },
        wrapper: {
          paddingInline: '2',
          gap: '1',
        },
      }),
      md: parts({
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
      }),
      lg: parts({
        input: {
          height: '12',
        },
        wrapper: {
          paddingInline: '4',
          gap: '3',
        },
      }),
    },
    variant: {
      solid: parts({
        root: {
          backgroundColor: 'fill',
        },
      }),
      outline: parts({
        root: {
          backgroundColor: 'fill',
          border: 'weak',
          divideColor: 'stroke.weak',
          shadow: 'xs',
        },
      }),
    },
  },
  defaultVariants: {
    size: 'md',
    variant: 'outline',
  },
});
