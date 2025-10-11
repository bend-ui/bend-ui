import { defineParts, defineRecipe } from '@pandacss/dev';

const parts = defineParts({
  root: { selector: '&' },
  icon: { selector: '& [data-part="icon"]' },
  title: { selector: '& [data-part="title"]' },
  content: { selector: '& [data-part="content"]' },
  footer: { selector: '& [data-part="footer"]' },
  dismiss: { selector: '& [data-part="dismiss"]' },
});

export const alert = defineRecipe({
  className: 'Alert',
  base: parts({
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
  }),
});
