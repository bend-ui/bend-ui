import { defineSlotRecipe } from '@pandacss/dev';

export const collapsible = defineSlotRecipe({
  className: 'Collapsible',
  slots: ['root', 'trigger', 'content'],
  variants: {
    variant: {
      default: {},
    },
  },
});
