import { defineSlotRecipe } from '@pandacss/dev';

export const buttonGroup = defineSlotRecipe({
  slots: ['root', 'button'],
  className: 'ButtonGroup',
  base: {
    root: {
      display: 'flex',
      flexDirection: 'row',
      gap: 'md',
    },
  },
});
