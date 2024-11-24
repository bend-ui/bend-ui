import { defineSlotRecipe } from '@pandacss/dev';

export const badgeConfig = {
  className: 'Badge',
  slots: ['root'],
};

export const badge = defineSlotRecipe({
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
