import { defineSlotRecipe } from '@pandacss/dev';

export const tagsInputRecipe = defineSlotRecipe({
  className: 'TagsInput',
  slots: ['root', 'input', 'chip', 'removeButton'],
});
