import { defineSlotRecipe } from '@pandacss/dev';

export const scrollArea = defineSlotRecipe({
  className: 'ScrollArea',
  slots: ['root', 'viewport', 'scrollbar', 'thumb', 'corner'],
});
