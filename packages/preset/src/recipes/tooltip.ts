import { defineSlotRecipe } from '@pandacss/dev';

export const tooltipRecipe = defineSlotRecipe({
  className: 'tooltip',
  slots: ['root', 'arrow', 'arrowTip', 'trigger', 'content'],
  base: {
    content: {
      p: 'sm',
      backgroundColor: 'bg.surface.raise',
    },
  },
});
