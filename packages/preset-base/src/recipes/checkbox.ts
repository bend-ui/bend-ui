import { defineSlotRecipe } from '@pandacss/dev';

export default defineSlotRecipe({
  description: 'Styles for the Checkbox component',
  className: 'Checkbox',
  slots: ['root', 'control', 'indicator', 'label', 'hidden-input'],
  base: {
    root: {
      display: 'flex',
      alignItems: 'center',
      gap: 'sm',
    },
    label: {},
    control: {
      flexShrink: '0',
      cursor: 'pointer',

      _disabled: {
        cursor: 'not-allowed',
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
