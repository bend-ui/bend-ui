import { defineSlotRecipe } from '@pandacss/dev';

export const menubar = defineSlotRecipe({
  className: 'Menubar',
  slots: ['root', 'menu', 'trigger', 'content', 'item', 'separator'],
});
