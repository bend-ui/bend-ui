import { defineParts, defineRecipe } from '@pandacss/dev';

const parts = defineParts({
  root: { selector: '&' },
  item: { selector: '& [data-part="item"]' },
});

export const toggleGroupRecipe = defineRecipe({
  className: 'ToggleGroup',
  base: parts({
    root: {
      gap: 'md',
    },
  }),
});
