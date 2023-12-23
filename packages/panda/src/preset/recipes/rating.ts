import { defineSlotRecipe } from '@pandacss/dev';

export const ratingRecipe = defineSlotRecipe({
  className: 'rating',
  slots: ['root', 'star'],
});
