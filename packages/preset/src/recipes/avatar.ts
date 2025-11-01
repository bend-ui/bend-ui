import { defineParts, defineRecipe } from '@pandacss/dev';

const parts = defineParts({
  root: { selector: '&' },
  image: { selector: '& [data-part="image"]' },
  fallback: { selector: '& [data-part="fallback"]' },
});

export const avatarRecipe = defineRecipe({
  className: 'Avatar',
  base: parts({
    root: {
      rounded: 'full',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
    },
    fallback: {
      backgroundColor: 'fill',
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
