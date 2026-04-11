import { defineSlotRecipe } from '@pandacss/dev';

export const toolbar = defineSlotRecipe({
  className: 'Toolbar',
  slots: ['root', 'separator'],
});
