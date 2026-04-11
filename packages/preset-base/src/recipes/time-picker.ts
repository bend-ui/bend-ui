import { defineSlotRecipe } from '@pandacss/dev';

export const timePicker = defineSlotRecipe({
  className: 'TimePicker',
  slots: [
    'root',
    'label',
    'control',
    'trigger',
    'input',
    'positioner',
    'content',
    'column',
    'item',
  ],
});
