import { defineParts, defineRecipe } from '@pandacss/dev';

const parts = defineParts({
  root: { selector: '&' },
  content: { selector: '& [data-part="content"]' },
});

export const sidebarRecipe = defineRecipe({
  className: 'Sidebar',
  base: parts({
    root: {},
    content: {},
  }),
});
