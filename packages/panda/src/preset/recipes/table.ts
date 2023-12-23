import { defineSlotRecipe } from '@pandacss/dev';

export const tableRecipe = defineSlotRecipe({
  className: 'table',
  slots: ['root', 'row', 'cell', 'header', 'footer', 'body', 'head'],
});
