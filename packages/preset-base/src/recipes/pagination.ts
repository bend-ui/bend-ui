import { defineSlotRecipe } from '@pandacss/dev';

export const pagination = defineSlotRecipe({
  className: 'Pagination',
  slots: ['root', 'item', 'ellipsis'],
  base: {
    root: {
      display: 'flex',
    },
    ellipsis: {
      display: 'inline-flex',
      alignItems: 'center',
    },
  },
});
