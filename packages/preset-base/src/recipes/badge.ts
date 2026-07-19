import { defineSlotRecipe } from '@pandacss/dev';

export const badgeConfig = {
  className: 'Badge',
  slots: ['root'],
};

export const badge = defineSlotRecipe({
  slots: ['root'],
  className: 'badge',
  base: {
    root: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
});
