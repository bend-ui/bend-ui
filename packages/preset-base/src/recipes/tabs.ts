import { defineRecipe, defineParts } from '@pandacss/dev';

const parts = defineParts({
  root: { selector: '&' },
  list: { selector: '& [data-part="list"]' },
  trigger: { selector: '& [data-part="trigger"]' },
  content: { selector: '& [data-part="content"]' },
});

const tabs = defineRecipe({
  className: 'Tabs',
  base: parts({
    root: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'md',
    },
  }),
});

export const tabsParts = parts;
export const tabsRecipe = tabs;
