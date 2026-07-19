import { defineSlotRecipe } from '@pandacss/dev';

export const fieldset = defineSlotRecipe({
  className: 'Fieldset',
  slots: ['root', 'legend'],
});
