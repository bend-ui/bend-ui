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
