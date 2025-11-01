import { defineParts, defineRecipe } from '@pandacss/dev';

const parts = defineParts({
  content: { selector: '& [data-part="content"]' },
  title: { selector: '& [data-part="title"]' },
  description: { selector: '& [data-part="description"]' },
  arrow: { selector: '& [data-part="arrow"]' },
  arrowTip: { selector: '& [data-part="arrowTip"]' },
  closeTrigger: { selector: '& [data-part="closeTrigger"]' },
});

export const popover = defineRecipe({
  className: 'Popover',
  base: parts({
    content: {
      display: 'flex',
      flexDirection: 'column',
    },
  }),
});
