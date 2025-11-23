import { defineParts, defineRecipe } from '@pandacss/dev';

const parts = defineParts({
  root: { selector: '&' },
  icon: { selector: '& [data-part="icon"]' },
  label: { selector: '& [data-part="label"]' },
});

export const button = defineRecipe({
  className: 'Button',
  base: parts({
    root: {
      display: 'flex',
      placeItems: 'center',
      placeContent: 'center',
      maxWidth: 'max-content',
    },
  }),
  variants: {
    isFull: {
      true: parts({
        root: {
          width: 'full',
          maxWidth: 'full',
        },
      }),
    },
  },
});
