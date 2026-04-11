import { defineSlotRecipe } from '@pandacss/dev';

export const listbox = defineSlotRecipe({
  className: 'Listbox',
  slots: ['root', 'label', 'item', 'section', 'sectionLabel', 'indicator'],
});
