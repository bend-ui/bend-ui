import { defineSlotRecipe } from '@pandacss/dev';

export const popover = defineSlotRecipe({
  slots: [
    'content',
    'title',
    'description',
    'arrow',
    'arrowTip',
    'closeTrigger',
  ],
  className: 'Popover',
  base: {
    content: {
      display: 'flex',
      flexDirection: 'column',
    },
  },
});
