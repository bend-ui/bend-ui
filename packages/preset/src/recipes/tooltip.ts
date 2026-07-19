import { defineSlotRecipe } from '@pandacss/dev';

export const tooltipRecipe = defineSlotRecipe({
  slots: ['root', 'trigger', 'content', 'arrow', 'arrowTip'],
  className: 'Tooltip',
  base: {
    content: {
      p: 'sm',
      layerStyle: 'surface.raised',
      _open: {
        animation: 'fade-in',
      },
      _closed: {
        animation: 'fade-out',
      },
    },
  },
});
