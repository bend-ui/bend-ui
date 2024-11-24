import { defineSlotRecipe } from '@pandacss/dev';

export const alert = defineSlotRecipe({
  className: 'Alert',
  slots: ['root', 'icon', 'title', 'content', 'footer'],
  base: {
    root: {
      position: 'relative',
      display: 'grid',
      gridTemplateColumns: 'max-content 1fr',
      gridTemplateRows: 'auto 1fr auto',
      gridTemplateAreas: '"icon title" "icon content" "icon footer"',
    },
    icon: {
      gridArea: 'icon',
    },
    title: {
      gridArea: 'title',
    },
    content: {
      gridArea: 'content',
    },
    footer: {
      gridArea: 'footer',
    },
  },
});
