import { defineSlotRecipe } from '@pandacss/dev';

export const avatarRecipe = defineSlotRecipe({
  slots: ['root', 'image', 'fallback'],
  className: 'Avatar',
  base: {
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
  },
});
