import { defineSlotRecipe } from '@pandacss/dev';

export default defineSlotRecipe({
  className: 'button',
  slots: ['root', 'icon', 'label'],
  base: {
    root: {
      display: 'inline-flex',
      placeItems: 'center',
      placeContent: 'center',
    },
  },
});
