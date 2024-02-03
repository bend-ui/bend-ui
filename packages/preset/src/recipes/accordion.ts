import { defineSlotRecipe } from '@pandacss/dev';

export const accordionRecipe = defineSlotRecipe({
  className: 'Accordion',
  slots: ['item', 'trigger', 'indicator', 'content'],
  base: {
    item: {
      border: 'base',
    },
    trigger: {
      display: 'flex',
    },
    indicator: {
      display: 'flex',
      marginBlockEnd: 'auto',
    },
    content: {},
  },
});
