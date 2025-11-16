import { defineParts, defineRecipe } from '@pandacss/dev';

const parts = defineParts({
  root: { selector: '&' },
  button: { selector: '& button' },
});

export const buttonGroup = defineRecipe({
  className: 'ButtonGroup',
  base: parts({
    root: {
      display: 'flex',
      flexDirection: 'row',
      gap: 'md',
    },
  }),
});
