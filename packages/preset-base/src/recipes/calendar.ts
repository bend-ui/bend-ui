import { defineSlotRecipe } from '@pandacss/dev';

export const calendar = defineSlotRecipe({
  className: 'Calendar',
  slots: [
    'root',
    'header',
    'prevTrigger',
    'nextTrigger',
    'viewTrigger',
    'rangeText',
    'grid',
    'gridHeader',
    'gridBody',
    'headCell',
    'cell',
  ],
});
