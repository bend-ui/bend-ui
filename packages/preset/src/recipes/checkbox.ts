import { defineSlotRecipe } from '@pandacss/dev';

export const checkboxRecipe = defineSlotRecipe({
  description: 'Styles for the Checkbox component',
  className: 'Checkbox',
  slots: ['root', 'control', 'indicator', 'label', 'hidden-input'],
  base: {
    root: {},
    label: {},
    control: {
      rounded: 'sm',
      color: 'text',
      border: 'input',
      bg: 'bg.surface',
      focusRingOffsetColor: 'red',

      _focusVisible: {
        outline: '2px solid transparent',
        outlineOffset: '2px',
        focusRingWidth: '2',
        focusRingColor: 'ring',
        focusRingOffsetWidth: '2',
      },

      _hover: {
        borderColor: 'border.hover',
        bg: 'bg.surface.hover',
      },

      _disabled: {
        opacity: '0.5',
      },

      _checked: {
        color: 'primary.fg',
        borderColor: 'primary.fill',
        bg: 'primary.fill',
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
