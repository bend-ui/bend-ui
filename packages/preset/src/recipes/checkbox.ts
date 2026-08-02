import { defineSlotRecipe } from '@pandacss/dev';

export const checkboxRecipe = defineSlotRecipe({
  slots: ['root', 'label', 'control', 'indicator'],
  description: 'Styles for the Checkbox component',
  className: 'Checkbox',
  base: {
    root: {},
    label: {
      color: 'text.strong',
    },
    control: {
      rounded: 'control',
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
  },
  variants: {
    size: {
      sm: {
        control: {
          h: '3',
          w: '3',
        },
      },
      md: {
        control: {
          h: '4',
          w: '4',
        },
      },
      lg: {
        control: {
          h: '5',
          w: '5',
        },
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },
});
