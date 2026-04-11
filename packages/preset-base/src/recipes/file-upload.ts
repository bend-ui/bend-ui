import { defineSlotRecipe } from '@pandacss/dev';

export const fileUpload = defineSlotRecipe({
  className: 'FileUpload',
  slots: [
    'root',
    'label',
    'dropzone',
    'trigger',
    'item',
    'itemGroup',
    'itemName',
    'itemSizeText',
    'itemDeleteTrigger',
    'itemPreview',
    'itemPreviewImage',
  ],
});
