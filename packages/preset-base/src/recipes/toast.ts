import { defineSlotRecipe } from '@pandacss/dev';

export const toast = defineSlotRecipe({
  className: 'Toast',
  slots: [
    'root',
    'viewport',
    'title',
    'description',
    'closeTrigger',
    'actionTrigger',
  ],
});
