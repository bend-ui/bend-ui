import { defineSlotRecipe } from '@pandacss/dev';

export const navbarRecipe = defineSlotRecipe({
  className: 'Navbar',
  description: 'A navigation bar for your website.',
  slots: [
    'root',
    'list',
    'item',
    'link',
    'trigger',
    'content',
    'icon',
    'portal',
    'positioner',
    'popup',
    'arrow',
    'viewport',
  ],
  base: {
    root: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    list: {
      display: 'flex',
      flexDirection: 'row',
      position: 'relative',
    },
    trigger: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    content: {},
  },
});
