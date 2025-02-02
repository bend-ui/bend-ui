import { defineParts, defineRecipe } from '@pandacss/dev';

export const parts = defineParts({
  root: { selector: '&' },
  image: { selector: '& [data-part="image"]' },
  fallback: { selector: '& [data-part="fallback"]' },
});

export const avatarRecipe = defineRecipe({
  className: 'Avatar',
  base: parts({
    root: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
    },
    image: {
      w: 'full',
      h: 'full',
      objectFit: 'cover',
    },
    fallback: {
      w: 'full',
      h: 'full',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  }),
});
