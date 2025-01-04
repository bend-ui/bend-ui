import { defineParts, defineRecipe } from '@pandacss/dev';

// Define the parts of the avatar
export const parts = defineParts({
  root: { selector: '&[data-part="root"]' },
  image: { selector: '& [data-part="image"]' },
  fallback: { selector: '& [data-part="fallback"]' },
});

// Define the recipe using the parts
export const avatarRecipe = defineRecipe({
  className: 'Avatar',
  base: parts({
    root: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      rounded: 'full',
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
