import { defineSlotRecipe } from '@pandacss/dev';

export const paginationRecipe = defineSlotRecipe({
  slots: ['root', 'item', 'ellipsis', 'nextTrigger', 'prevTrigger'],
  className: 'Pagination',
  base: {
    root: {},
    item: {},
    ellipsis: {},
  },
});
