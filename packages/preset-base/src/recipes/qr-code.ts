import { defineSlotRecipe } from '@pandacss/dev';

export const qrCode = defineSlotRecipe({
  className: 'QrCode',
  slots: ['root', 'frame', 'overlay'],
});
