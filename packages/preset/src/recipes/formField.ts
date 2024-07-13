import { defineSlotRecipe } from '@pandacss/dev';

export const formFieldRecipe = defineSlotRecipe({
  className: 'FormField',
  slots: ['root', 'label', 'description', 'error'],
  base: {
    root: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'sm',
    },
    label: {
      fontWeight: 'bold',
    },
    description: {
      color: 'text.subtle',
      textStyle: 'body.sm',
    },
    error: {
      color: 'fg.danger',
    },
  },
});
