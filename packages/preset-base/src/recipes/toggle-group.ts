import { defineRecipe, defineParts } from '@pandacss/dev';

const parts = defineParts({
  root: { selector: '&' },
  item: { selector: '& [data-part="item"]' },
});

export const toggleGroupRecipe = defineRecipe({
  className: 'ToggleGroup',
  base: parts({
    root: {
      display: 'flex',
      flexDirection: 'row',
    },
  }),
});
