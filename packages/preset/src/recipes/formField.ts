import { defineParts, defineRecipe } from '@pandacss/dev';

const parts = defineParts({
  root: { selector: '&' },
  label: { selector: '& [data-part="label"]' },
  description: { selector: '& [data-part="description"]' },
  error: { selector: '& [data-part="error"]' },
  helper: { selector: '& [data-part="helper"]' },
});

export const formFieldRecipe = defineRecipe({
  className: 'FormField',
  base: parts({
    root: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'sm',
    },
    label: {
      fontSize: 'sm',
      fontWeight: 'medium',
      color: 'text.primary',
    },
  }),
});
