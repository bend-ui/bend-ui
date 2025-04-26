import { defineParts, defineRecipe } from '@pandacss/dev';

const parts = defineParts({
  root: { selector: '&' },
  arrow: { selector: '& [data-part="arrow"]' },
  arrowTip: { selector: '& [data-part="arrow-tip"]' },
  trigger: { selector: '& [data-part="trigger"]' },
  content: { selector: '& [data-part="content"]' },
});

export const tooltipRecipe = defineRecipe({
  className: 'Tooltip',
  base: parts({
    content: {},
  }),
});
