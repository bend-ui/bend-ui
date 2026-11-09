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
    description: { color: 'text', fontSize: 'sm' },
    helper: { color: 'text', fontSize: 'sm' },
    error: { color: 'text.danger', fontSize: 'sm', _dark: { color: 'text' } },
    label: {
      fontSize: 'sm',
      fontWeight: 'medium',
      color: 'text',
    },
  },
});
