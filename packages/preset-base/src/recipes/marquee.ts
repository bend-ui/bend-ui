import { defineSlotRecipe } from '@pandacss/dev';

export const marquee = defineSlotRecipe({
  className: 'Marquee',
  slots: ['root', 'content'],
});
