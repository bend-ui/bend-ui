import { defineSlotRecipe } from '@pandacss/dev';

export const formFieldRecipe = defineSlotRecipe({
  slots: ['root', 'label', 'description', 'error', 'helper'],
  className: 'FormField',
  base: {
    root: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'sm',
    },
    label: {
      fontSize: 'sm',
      fontWeight: 'medium',
      color: 'text.primary',
    },
  },
});
