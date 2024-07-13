import { defineSlotRecipe } from '@pandacss/dev';

export const badgeConfig = {
  className: 'Badge',
  slots: ['root'],
};

export default defineSlotRecipe({
  className: 'badge',
  slots: ['root'],
  base: {
    root: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
});
