import { defineSlotRecipe } from '@pandacss/dev';

export const accordionRecipe = defineSlotRecipe({
  className: 'accordion',
  slots: ['item', 'trigger', 'content'],
  base: {
    item: {
      border: 'base',
    },
    trigger: {
      display: 'flex',
    },
    content: {},
  },
});
