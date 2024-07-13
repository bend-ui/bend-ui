import { defineSlotRecipe } from '@pandacss/dev';

export default defineSlotRecipe({
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
