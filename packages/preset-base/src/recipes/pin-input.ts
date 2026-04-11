import { defineSlotRecipe } from '@pandacss/dev';

export const pinInput = defineSlotRecipe({
  className: 'PinInput',
  slots: ['root', 'label', 'control', 'input', 'hiddenInput'],
});
