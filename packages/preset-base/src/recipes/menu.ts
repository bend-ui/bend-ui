import { defineParts, defineRecipe } from '@pandacss/dev';

const parts = defineParts({
  root: { selector: '&' },
  content: { selector: '& [data-part="content"]' },
  item: { selector: '& [data-part="item"]' },
});

export const menu = defineRecipe({
  className: 'Menu',
});
