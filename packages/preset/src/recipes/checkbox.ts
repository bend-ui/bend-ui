import { defineParts, defineRecipe } from '@pandacss/dev';

const parts = defineParts({
  root: {
    selector: '&',
  },
  label: {
    selector: '& [data-part="label"]',
  },
  control: {
    selector: '& [data-part="control"]',
  },
  indicator: {
    selector: '& [data-part="indicator"]',
  },
});

export const checkboxRecipe = defineRecipe({
  description: 'Styles for the Checkbox component',
  className: 'Checkbox',
  base: parts({
    root: {},
    label: {},
    control: {
      rounded: 'sm',
      border: 'base',

      _focusVisible: {
        outline: '2px solid transparent',
        outlineOffset: '2px',
        ringWidth: '2',
        ringColor: 'ring',
        ringOffset: '2',
      },

      _disabled: {
        opacity: '0.5',
      },

      _checked: {
        color: 'primary.fg',
        bgColor: 'primary',
        borderColor: 'primary',
      },
    },
    indicator: {},
  }),
  variants: {
    size: {
      sm: parts({
        control: {
          h: '3',
          w: '3',
        },
      }),
      md: parts({
        control: {
          h: '4',
          w: '4',
        },
      }),
      lg: parts({
        control: {
          h: '5',
          w: '5',
        },
      }),
    },
  },
  defaultVariants: {
    size: 'md',
  },
});
