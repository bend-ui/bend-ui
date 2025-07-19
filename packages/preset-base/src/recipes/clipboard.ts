import { defineRecipe, defineParts } from '@pandacss/dev';

const parts = defineParts({
  root: { selector: '&' },
  label: { selector: '& [data-part="label"]' },
  control: { selector: '& [data-part="control"]' },
  input: { selector: '& [data-part="input"]' },
  trigger: { selector: '& [data-part="trigger"]' },
  indicator: { selector: '& [data-part="indicator"]' },
});

export const clipboardRecipe = defineRecipe({
  className: 'Clipboard',
  base: parts({
    root: {},
  }),
});
