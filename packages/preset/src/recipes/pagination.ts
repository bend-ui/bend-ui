import { defineSlotRecipe } from '@pandacss/dev';

export const paginationRecipe = defineSlotRecipe({
  className: 'pagination',
  slots: ['root', 'item'],
});
