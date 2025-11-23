import { defineParts, defineRecipe } from '@pandacss/dev';

const parts = defineParts({
  root: { selector: '&' },
  indicator: { selector: '& [data-part="indicator"]' },
  itemControl: { selector: '& [data-part="itemControl"]' },
  item: { selector: '& [data-part="item"]' },
  itemText: { selector: '& [data-part="itemText"]' },
  itemHiddenInput: { selector: '& [data-part="itemHiddenInput"]' },
  label: { selector: '& [data-part="label"]' },
});

export const radioGroupRecipe = defineRecipe({
  className: 'RadioGroup',

  base: parts({
    root: {
      display: 'flex',
      flexDirection: {
        _vertical: 'column',
        _horizontal: 'row',
      },
    },
  }),
});
