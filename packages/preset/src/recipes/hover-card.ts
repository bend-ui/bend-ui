import { defineRecipe } from '@pandacss/dev';

export const hoverCard = defineRecipe({
  className: 'HoverCard',
  description: 'A card that appears on hover.',
  base: {
    layerStyle: 'surface.overlay',
  },
});
