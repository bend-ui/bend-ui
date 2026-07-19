import { defineSlotRecipe } from '@pandacss/dev';

export const datePickerRecipe = defineSlotRecipe({
  slots: [
    'root',
    'label',
    'control',
    'input',
    'trigger',
    'clearTrigger',
    'view',
    'context',
    'viewControl',
    'prevTrigger',
    'viewTrigger',
    'nextTrigger',
    'rangeText',
  ],
  className: 'DatePicker',
  base: {
    root: {
      display: 'flex',
      flexDirection: 'column',
    },
  },
});
