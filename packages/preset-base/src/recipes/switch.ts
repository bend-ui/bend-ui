import { defineParts, defineRecipe } from '@pandacss/dev';

const parts = defineParts({
  root: { selector: '&' },
  control: { selector: '& [data-part="control"]' },
  thumb: { selector: '& [data-part="thumb"]' },
  label: { selector: '& [data-part="label"]' },
});

export const switchRecipe = defineRecipe({
  className: 'Switch',
  jsx: ['Switch', /Switch\.+/],
});
