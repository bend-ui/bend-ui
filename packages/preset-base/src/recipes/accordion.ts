import { defineParts, defineRecipe } from '@pandacss/dev';

const parts = defineParts({
  root: { selector: '&' },
  item: { selector: '& [data-part="item"]' },
  trigger: { selector: '& [data-part="item-trigger"]' },
  content: { selector: '& [data-part="item-content"]' },
});

export const accordion = defineRecipe({
  className: 'Accordion',
  base: parts({
    root: {
      display: 'flex',
      flexDirection: 'column',
    },
  }),
});
