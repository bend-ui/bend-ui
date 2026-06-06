import { defineSlotRecipe } from '@pandacss/dev';

export const card = defineSlotRecipe({
  className: 'Card',
  slots: ['root', 'section'],
  base: {
    root: { display: 'flex', flexDirection: 'column' },
    section: {},
  },
});
