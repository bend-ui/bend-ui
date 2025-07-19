import { defineRecipe, defineParts } from '@pandacss/dev';

const parts = defineParts({
  root: { selector: '&' },
  label: { selector: '& [data-part="label"]' },
  control: { selector: '& [data-part="control"]' },
  input: { selector: '& [data-part="input"]' },
  trigger: { selector: '& [data-part="trigger"]' },
  clearTrigger: { selector: '& [data-part="clear-trigger"]' },
  view: { selector: '& [data-part="view"]' },
  context: { selector: '& [data-part="context"]' },
  viewControl: { selector: '& [data-part="view-control"]' },
  prevTrigger: { selector: '& [data-part="prev-trigger"]' },
  viewTrigger: { selector: '& [data-part="view-trigger"]' },
  nextTrigger: { selector: '& [data-part="next-trigger"]' },
  rangeText: { selector: '& [data-part="range-text"]' },
});

export const datePickerRecipe = defineRecipe({
  className: 'DatePicker',
  base: parts({
    root: {},
  }),
});
