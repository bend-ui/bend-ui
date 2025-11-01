import { defineParts, defineRecipe } from '@pandacss/dev';

const parts = defineParts({
  root: { selector: '&' },
  trigger: { selector: '& [data-part="trigger"]' },
  content: { selector: '& [data-part="content"]' },
  arrow: { selector: '& [data-part="arrow"]' },
  arrowTip: { selector: '& [data-part="arrow-tip"]' },
});

export const tooltipRecipe = defineRecipe({
  className: 'Tooltip',
  base: parts({
    content: {
      p: 'sm',
      layerStyle: 'surface.raised',
      _open: {
        animation: 'fade-in',
      },
      _closed: {
        animation: 'fade-out',
      },
    },
  }),
});
