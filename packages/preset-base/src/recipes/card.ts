import { defineParts, defineRecipe } from '@pandacss/dev';

const parts = defineParts({
  root: { selector: '&' },
  section: { selector: '& [data-part="section"]' },
});

export const card = defineRecipe({
  className: 'Card',
  base: parts({
    root: { display: 'flex', flexDirection: 'column' },
    section: {},
  }),
});
