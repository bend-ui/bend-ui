import { defineSlotRecipe } from '@pandacss/dev';

export const gridList = defineSlotRecipe({
  className: 'GridList',
  slots: ['root', 'header', 'item', 'section'],
});
