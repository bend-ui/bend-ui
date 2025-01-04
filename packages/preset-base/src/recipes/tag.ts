import { defineSlotRecipe } from '@pandacss/dev';

export const tag = defineSlotRecipe({
  className: 'Tag',
  slots: ['root', 'label', 'closeButton', 'startContent', 'endContent'],
  base: {
    root: {
      display: 'inline-flex',
      alignItems: 'center',
    },
    label: {
      lineClamp: 1,
    },
    closeButton: {},
    startContent: {
      flexShrink: 0,
    },
    endContent: {
      flexShrink: 0,
    },
  },
});
