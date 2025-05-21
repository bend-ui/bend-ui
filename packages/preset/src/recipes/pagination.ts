import { defineRecipe, defineParts } from '@pandacss/dev';

const parts = defineParts({
  root: {
    selector: '&',
  },
  item: {
    selector: '& [data-component-part="item"]',
  },
  ellipsis: {
    selector: '& [data-component-part="ellipsis"]',
  },
  nextTrigger: {
    selector: '& [data-component-part="next-trigger"]',
  },
  prevTrigger: {
    selector: '& [data-component-part="prev-trigger"]',
  },
});

export const paginationRecipe = defineRecipe({
  className: 'Pagination',
  base: parts({
    root: {
      bg: 'red',
    },
    item: {},
    ellipsis: {},
  }),
});
