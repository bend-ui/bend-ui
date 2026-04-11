import { defineSlotRecipe } from '@pandacss/dev';

export const editable = defineSlotRecipe({
  className: 'Editable',
  slots: [
    'root',
    'label',
    'area',
    'input',
    'preview',
    'control',
    'editTrigger',
    'submitTrigger',
    'cancelTrigger',
  ],
});
