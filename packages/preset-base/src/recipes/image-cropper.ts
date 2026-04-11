import { defineSlotRecipe } from '@pandacss/dev';

export const imageCropper = defineSlotRecipe({
  className: 'ImageCropper',
  slots: ['root', 'canvas', 'cropper', 'grid', 'control'],
});
