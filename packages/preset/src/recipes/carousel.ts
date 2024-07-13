import { defineSlotRecipe } from '@pandacss/dev';

export const carouselRecipe = defineSlotRecipe({
  className: 'Carousel',
  slots: [
    'root',
    'control',
    'prevTrigger',
    'nextTrigger',
    'indicatorGroup',
    'indicator',
    'viewport',
    'itemGroup',
    'item',
  ],
});
