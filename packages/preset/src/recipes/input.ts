import { defineParts, defineRecipe } from '@pandacss/dev';

const parts = defineParts({
  root: { selector: '&' },
  wrapper: { selector: '& [data-component-part="wrapper"]' },
  input: { selector: '& [data-component-part="input"]' },
  icon: { selector: '& [data-component-part="icon"]' },
  element: { selector: '& [data-component-part="element"]' },
  addon: { selector: '& [data-component-part="addon"]' },
});

export const inputRecipe = defineRecipe({
  description: 'Input styles',
  className: 'Input',
  base: parts({
    root: {
      rounded: 'lg',
      border: 'strong',
      transitionProperty: 'colors, border-color, background-color',
      transitionDuration: 'fast',
      transitionTimingFunction: 'ease-in-out',
      divideX: '1px',
      divideColor: 'border.subtle',
      _focusWithin: {
        layerStyle: 'focus',
      },
      _invalid: {
        border: 'danger',
      },
      _disabled: {
        border: 'disabled',
      },
    },
    wrapper: {
      cursor: 'text',
    },
  }),
  variants: {
    size: {
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
    },
    variant: {
      solid: parts({
        root: {},
      }),
      outline: parts({
        root: {},
        wrapper: {
          _hover: {
            backgroundColor: 'surface.hover',
          },
        },
      }),
    },
  },
  defaultVariants: {
    size: 'md',
    variant: 'outline',
  },
});
