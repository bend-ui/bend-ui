import { defineSlotRecipe } from '@pandacss/dev';

export const toggleGroupRecipe = defineSlotRecipe({
  className: 'ToggleGroup',
  slots: ['root', 'item'],
  base: {
    root: {
      display: 'flex',
      flexDirection: 'row',
    },
    item: {},
  },
});
