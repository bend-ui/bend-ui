import { defineSlotRecipe } from '@pandacss/dev';

export const clipboardRecipe = defineSlotRecipe({
  slots: ['root', 'label', 'control', 'input', 'trigger', 'indicator'],
  className: 'Clipboard',
  base: {
    root: {},
  },
});
