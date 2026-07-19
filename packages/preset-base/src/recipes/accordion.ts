import { defineSlotRecipe } from '@pandacss/dev';

export const accordion = defineSlotRecipe({
  slots: ['root', 'item', 'trigger', 'content'],
  className: 'Accordion',
  base: {
    root: {
      display: 'flex',
      flexDirection: 'column',
    },
  },
});
