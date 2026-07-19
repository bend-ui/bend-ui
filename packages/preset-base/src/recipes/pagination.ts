import { defineSlotRecipe } from '@pandacss/dev';

export const pagination = defineSlotRecipe({
  slots: ['root', 'item', 'nextTrigger', 'prevTrigger', 'ellipsis'],
  className: 'Pagination',
  base: {
    root: {
      display: 'flex',
    },
    item: {
      display: 'inline-flex',
      alignItems: 'center',
    },
    nextTrigger: {
      display: 'inline-flex',
      alignItems: 'center',
    },
    prevTrigger: {
      display: 'inline-flex',
      alignItems: 'center',
    },
    ellipsis: {
      display: 'inline-flex',
      alignItems: 'center',
    },
  },
});
