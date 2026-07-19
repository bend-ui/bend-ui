import { defineSlotRecipe } from '@pandacss/dev';

export const hoverCard = defineSlotRecipe({
  className: 'HoverCard',
  description: 'A card that appears on hover.',
  slots: ['trigger', 'positioner', 'content', 'arrow'],
  base: {
    content: {
      layerStyle: 'surface.overlay',
    },
  },
});
