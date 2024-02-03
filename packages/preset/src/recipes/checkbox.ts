import { defineSlotRecipe } from '@pandacss/dev';

export const checkboxRecipe = defineSlotRecipe({
  description: 'Styles for the Checkbox component',
  className: 'checkbox',
  slots: ['root', 'indicator'],
  base: {
    root: {
      h: '4',
      w: '4',
      flexShrink: '0',
      rounded: 'sm',
      border: 'input',
      cursor: 'pointer',
      focusRingOffsetColor: 'red',

      _focusVisible: {
        outline: '2px solid transparent',
        outlineOffset: '2px',
        focusRingWidth: '2',
        focusRingColor: 'ring',
        focusRingOffsetWidth: '2',
      },

      _disabled: {
        cursor: 'not-allowed',
        opacity: '0.5',
      },

      _checked: {
        bg: 'bg.primary',
        color: 'text.on.primary',
      },
    },
    indicator: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'currentColor',
    },
  },
});
