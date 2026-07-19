import { defineSlotRecipe } from '@pandacss/dev';

export const progress = defineSlotRecipe({
  className: 'Progress',
  slots: ['root', 'label', 'value', 'track', 'indicator'],
});
