import { defineSlotRecipe } from '@pandacss/dev';

export const accordion = defineSlotRecipe({
  className: 'Accordion',
  slots: ['root', 'item', 'trigger', 'content'],
});
