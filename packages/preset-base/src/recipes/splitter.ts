import { defineSlotRecipe } from '@pandacss/dev';

export const splitter = defineSlotRecipe({
  className: 'Splitter',
  slots: ['root', 'panel', 'resizeTrigger'],
});
