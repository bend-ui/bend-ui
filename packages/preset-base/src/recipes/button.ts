import { defineSlotRecipe } from '@pandacss/dev';

export const button = defineSlotRecipe({
  slots: ['root', 'icon', 'label'],
  className: 'Button',
  base: {
    root: {
      display: 'flex',
      placeItems: 'center',
      placeContent: 'center',
      maxWidth: 'max-content',
    },
  },
  variants: {
    isFull: {
      true: {
        root: {
          width: 'full',
          maxWidth: 'full',
        },
      },
    },
  },
});
