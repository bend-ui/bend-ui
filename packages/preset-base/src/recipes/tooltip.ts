import { defineSlotRecipe } from '@pandacss/dev';

export const tooltipRecipe = defineSlotRecipe({
  slots: ['root', 'arrow', 'arrowTip', 'trigger', 'content'],
  className: 'Tooltip',
  base: {
    content: {},
  },
});
