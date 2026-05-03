import { defineRecipe, defineParts } from '@pandacss/dev';

const parts = defineParts({
  root: {
    selector: '&',
  },
  item: {
    selector: '& [data-part="item"]',
  },
  ellipsis: {
    selector: '& [data-part="ellipsis"]',
  },
  nextTrigger: {
    selector: '& [data-part="next-trigger"]',
  },
  prevTrigger: {
    selector: '& [data-part="prev-trigger"]',
  },
});

export const paginationRecipe = defineRecipe({
  className: 'Pagination',
  base: parts({
    root: {},
    item: {},
    ellipsis: {},
  }),
});
