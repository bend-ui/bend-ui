import { defineSlotRecipe } from '@pandacss/dev';

export const avatarRecipe = defineSlotRecipe({
  slots: ['root', 'image', 'fallback'],
  className: 'Avatar',
  base: {
    root: {
      rounded: 'full',
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
      backgroundColor: 'fill',
    },
  },
  variants: {
    size: {
      sm: {
        root: {
          w: '8',
          h: '8',
        },
      },
      md: {
        root: {
          w: '16',
          h: '16',
        },
      },
      lg: {
        root: {
          w: '24',
          h: '24',
        },
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },
});
