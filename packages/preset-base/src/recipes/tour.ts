import { defineSlotRecipe } from '@pandacss/dev';

export const tour = defineSlotRecipe({
  className: 'Tour',
  slots: [
    'root',
    'overlay',
    'spotlight',
    'positioner',
    'content',
    'title',
    'description',
    'closeTrigger',
    'prevTrigger',
    'nextTrigger',
    'progress',
  ],
});
