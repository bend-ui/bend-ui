import { defineSlotRecipe } from '@pandacss/dev';

export default defineSlotRecipe({
  className: 'RadioGroup',
  slots: [
    'root',
    'indicator',
    'itemControl',
    'item',
    'itemText',
    'itemHiddenInput',
    'label',
  ],
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
