import { defineSlotRecipe } from '@pandacss/dev';

export const steps = defineSlotRecipe({
  className: 'Steps',
  slots: [
    'root',
    'list',
    'item',
    'trigger',
    'title',
    'description',
    'separator',
    'content',
    'indicator',
  ],
});
