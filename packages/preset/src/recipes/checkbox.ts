import { defineParts, defineRecipe } from '@pandacss/dev';

const parts = defineParts({
  root: {
    selector: '&',
  },
  label: {
    selector: '& [data-component-part="label"]',
  },
  control: {
    selector: '& [data-component-part="control"]',
  },
  indicator: {
    selector: '& [data-component-part="indicator"]',
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
      focusRingOffsetColor: 'red',
      borderColor: 'neutral.200',
      borderWidth: '1px',
      borderStyle: 'solid',

      _focusVisible: {
        outline: '2px solid transparent',
        outlineOffset: '2px',
        focusRingWidth: '2',
        focusRingColor: 'ring',
        focusRingOffsetWidth: '2',
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
