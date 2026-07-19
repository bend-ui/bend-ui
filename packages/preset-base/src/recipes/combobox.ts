import { defineSlotRecipe } from '@pandacss/dev';

export const combobox = defineSlotRecipe({
  className: 'Combobox',
  slots: [
    'root',
    'control',
    'trigger',
    'input',
    'content',
    'clearTrigger',
    'item',
    'itemGroup',
    'itemGroupLabel',
    'itemIndicator',
    'itemText',
    'label',
    'positioner',
  ],
});
