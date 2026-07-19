import { defineSlotRecipe } from '@pandacss/dev';

export const slider = defineSlotRecipe({
  className: 'Slider',
  slots: ['root', 'control', 'track', 'indicator', 'thumb'],
});
