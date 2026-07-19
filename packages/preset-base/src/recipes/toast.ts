import { defineSlotRecipe } from '@pandacss/dev';

export const toastRecipe = defineSlotRecipe({
  slots: ['root', 'viewport', 'title', 'description', 'closeTrigger'],
  className: 'Toast',
  base: {
    root: {},
  },
});
