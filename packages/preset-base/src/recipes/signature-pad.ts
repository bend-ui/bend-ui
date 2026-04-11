import { defineSlotRecipe } from '@pandacss/dev';

export const signaturePad = defineSlotRecipe({
  className: 'SignaturePad',
  slots: ['root', 'label', 'control', 'segment', 'guide', 'clearTrigger'],
});
