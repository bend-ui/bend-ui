import { defineSlotRecipe } from '@pandacss/dev';

export const chipInputRecipe = defineSlotRecipe({
  className: 'chipInput',
  slots: ['root', 'input', 'chip', 'removeButton'],
});
