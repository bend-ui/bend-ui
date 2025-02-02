import { defineRecipe } from '@pandacss/dev';

export const buttonGroup = defineRecipe({
  className: 'ButtonGroup',
  base: {
    display: 'flex',
    flexDirection: 'row',
    gap: 'md',
  },
});
