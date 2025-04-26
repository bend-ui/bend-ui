import { defineParts, defineRecipe } from '@pandacss/dev';

const parts = defineParts({
  root: { selector: '&' },
  trigger: { selector: '& [data-part="trigger"]' },
  positioner: { selector: '& [data-part="positioner"]' },
  content: { selector: '& [data-part="content"]' },
  title: { selector: '& [data-part="title"]' },
  description: { selector: '& [data-part="description"]' },
});

export const popover = defineRecipe({
  className: 'Popover',
  base: parts({
    root: {
      position: 'relative',
    },
    content: {
      display: 'flex',
      flexDirection: 'column',
    },
  }),
});
