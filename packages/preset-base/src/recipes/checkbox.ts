import { defineSlotRecipe } from '@pandacss/dev';

const slots = ['root', 'label', 'control', 'indicator'] as const;

export const checkbox = defineSlotRecipe({
  slots,
  description: 'Styles for the Checkbox component',
  className: 'Checkbox',
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
      '& svg': {
        width: '100%',
        height: '100%',
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

export const checkboxParts = slots;
