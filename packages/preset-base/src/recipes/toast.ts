import { defineParts, defineRecipe } from '@pandacss/dev';

const parts = defineParts({
  root: { selector: '&' },
  viewport: { selector: '& [data-part="viewport"]' },
  title: { selector: '& [data-part="title"]' },
  description: { selector: '& [data-part="description"]' },
  closeTrigger: { selector: '& [data-part="close-trigger"]' },
});

export const toastRecipe = defineRecipe({
  className: 'Toast',
  base: parts({
    root: {},
  }),
});
