import { defineRecipe, defineParts } from '@pandacss/dev';

const parts = defineParts({
  root: {
    selector: '&',
  },
  item: {
    selector: '& [data-component-part="item"]',
  },
  nextTrigger: {
    selector: '& [data-component-part="next-trigger"]',
  },
  prevTrigger: {
    selector: '& [data-component-part="prev-trigger"]',
  },
  ellipsis: {
    selector: '& [data-component-part="ellipsis"]',
  },
});

export const pagination = defineRecipe({
  className: 'Pagination',
  base: parts({
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
  }),
});
