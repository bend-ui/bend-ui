import { defineSlotRecipe } from '@pandacss/dev';

export const chipInputRecipe = defineSlotRecipe({
  className: 'ChipInput',
  slots: ['root', 'input', 'chip', 'removeButton'],
});
