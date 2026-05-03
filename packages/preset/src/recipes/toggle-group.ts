import { defineSlotRecipe } from '@pandacss/dev';

export const toggleGroupRecipe = defineSlotRecipe({
  className: 'ToggleGroup',
  slots: ['root', 'item'],
  base: {
    root: {
      gap: 'md',
    },
    item: {},
  },
});
