import { defineSlotRecipe } from '@pandacss/dev';

export const sidebarRecipe = defineSlotRecipe({
  className: 'Sidebar',
  slots: ['root', 'header', 'content', 'footer'],
  base: {
    root: {},
    header: {},
    content: {},
    footer: {},
  },
});
