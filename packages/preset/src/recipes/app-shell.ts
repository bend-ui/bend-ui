import { defineSlotRecipe } from '@pandacss/dev';

export const appShellRecipe = defineSlotRecipe({
  slots: ['root', 'banner', 'header', 'footer', 'main', 'sidebar'],
  description: '',
  className: 'AppShell',
  base: {
    banner: {
      borderBottom: 'weak',
    },
    header: {
      borderBottom: 'weak',
    },
    sidebar: {
      backgroundColor: 'bg.raised',
    },
    footer: {
      borderTop: 'weak',
    },
  },
});
