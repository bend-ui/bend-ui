import { defineSlotRecipe } from '@pandacss/dev';

export default defineSlotRecipe({
  className: 'Table',
  slots: ['root', 'caption', 'header', 'body', 'footer', 'row', 'head', 'cell'],
  base: {
    root: {
      width: 'full',
      borderCollapse: 'collapse',
    },
    head: {
      textAlign: 'left',
    },
  },
});
