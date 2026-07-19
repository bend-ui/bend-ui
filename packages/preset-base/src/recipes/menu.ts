import { defineSlotRecipe } from '@pandacss/dev';

export const menu = defineSlotRecipe({
  slots: [
    'root',
    'trigger',
    'positioner',
    'content',
    'arrow',
    'arrowTip',
    'item',
    'itemGroup',
    'itemGroupLabel',
    'radioGroup',
    'itemIndicator',
    'checkboxItem',
    'indicator',
    'separator',
  ],
  className: 'Menu',
});
