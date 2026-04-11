import { defineSlotRecipe } from '@pandacss/dev';

export const tree = defineSlotRecipe({
  className: 'Tree',
  slots: [
    'root',
    'label',
    'item',
    'itemText',
    'branch',
    'branchContent',
    'branchIndicator',
    'branchText',
    'branchTrigger',
  ],
});
