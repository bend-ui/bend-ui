import { defineSlotRecipe } from '@pandacss/dev';

export const navigationMenu = defineSlotRecipe({
  className: 'NavigationMenu',
  slots: [
    'root',
    'list',
    'item',
    'trigger',
    'content',
    'link',
    'indicator',
    'viewport',
  ],
});
