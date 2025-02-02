import { defineParts, defineRecipe } from '@pandacss/dev';

export const parts = defineParts({
  root: { selector: '&[data-part="root"]' },
  image: { selector: '& [data-part="image"]' },
  fallback: { selector: '& [data-part="fallback"]' },
});

export const avatarRecipe = defineRecipe({
  className: 'Avatar',
  base: parts({
    root: {
      rounded: 'full',
    },
    fallback: {
      backgroundColor: 'bg.surface',
    },
  }),
  variants: {
    size: {
      sm: parts({
        root: {
          w: '8',
          h: '8',
        },
      }),
      md: parts({
        root: {
          w: '16',
          h: '16',
        },
      }),
      lg: parts({
        root: {
          w: '24',
          h: '24',
        },
      }),
    },
  },
  defaultVariants: {
    size: 'md',
  },
});
