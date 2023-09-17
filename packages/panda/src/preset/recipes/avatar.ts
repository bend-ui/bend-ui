import { defineSlotRecipe } from '@pandacss/dev';

export const avatarRecipe = defineSlotRecipe({
  className: 'Avatar',
  slots: ['root', 'image', 'fallback'],
  base: {
    root: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      rounded: 'full',
    },
    image: {
      w: '100%',
      h: '100%',
      objectFit: 'cover',
    },
    fallback: {
      w: '100%',
      h: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
  variants: {
    size: {
      md: {
        root: {
          w: '16',
          h: '16',
        },
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },
});
