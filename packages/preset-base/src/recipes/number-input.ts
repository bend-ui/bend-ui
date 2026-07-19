import { defineSlotRecipe } from '@pandacss/dev';

export const numberInput = defineSlotRecipe({
  className: 'NumberInput',
  slots: [
    'root',
    'scrubArea',
    'scrubAreaCursor',
    'group',
    'decrementTrigger',
    'input',
    'incrementTrigger',
  ],
});
