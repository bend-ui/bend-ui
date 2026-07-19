import { defineSlotRecipe } from '@pandacss/dev';

export const radioGroupRecipe = defineSlotRecipe({
  slots: [
    'root',
    'indicator',
    'itemControl',
    'item',
    'itemText',
    'itemHiddenInput',
    'label',
  ],
  className: 'RadioGroup',

  base: {
    root: {
      display: 'flex',
      flexDirection: {
        _vertical: 'column',
        _horizontal: 'row',
      },
    },
  },
});
