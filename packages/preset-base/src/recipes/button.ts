import { defineSlotRecipe } from '@pandacss/dev';

export default defineSlotRecipe({
  className: 'Button',
  slots: ['root', 'icon', 'label'],
  base: {
    root: {
      display: 'inline-flex',
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
