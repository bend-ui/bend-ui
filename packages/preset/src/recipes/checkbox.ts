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
    label: {
      color: 'text.strong',
    },
    control: {
      rounded: 'sm',
      border: 'base',
      _focusVisible: {
        boxShadow: 'focusRing',
      },
      _disabled: {
        opacity: 'state.disabled',
      },
      _checked: {
        color: 'text.primary.inverse.strong',
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
