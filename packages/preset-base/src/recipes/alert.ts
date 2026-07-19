import { defineSlotRecipe } from '@pandacss/dev';

export const alert = defineSlotRecipe({
  slots: ['root', 'icon', 'title', 'content', 'footer', 'dismiss'],
  className: 'Alert',
  base: {
    root: {
      w: 'full',
      position: 'relative',
      display: 'grid',
      gridTemplateColumns: 'auto minmax(0, 1fr) auto',
      gridAutoFlow: 'column',
      gridAutoColumns: 'auto',
    },
    icon: {
      gridColumn: '1',
      display: 'flex',
      placeItems: 'center',
    },
    title: { gridColumn: '2', minW: '0' },
    content: { gridColumn: '2', minW: '0' },
    footer: { gridRow: 'auto', gridColumn: '2', minW: '0' },
    dismiss: { gridColumn: '3', alignSelf: 'start' },
  },
});
