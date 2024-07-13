import { defineSlotRecipe } from '@pandacss/dev';

export const breadcrumbsRecipe = defineSlotRecipe({
  className: 'Breadcrumbs',
  slots: ['root', 'item', 'separator'],
  base: {
    root: {
      display: 'flex',
      alignItems: 'center',
      gap: 'sm',
    },
    item: {
      display: 'flex',
      alignItems: 'center',
    },
  },
});
