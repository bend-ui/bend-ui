import { defineParts, defineRecipe } from '@pandacss/dev';

const parts = defineParts({
  root: { selector: '&' },
  header: { selector: '& [data-part="header"]' },
  footer: { selector: '& [data-part="footer"]' },
  main: { selector: '& [data-part="main"]' },
  sidebar: { selector: '& [data-part="sidebar"]' },
});

export const appShellRecipe = defineRecipe({
  description: '',
  className: 'AppShell',
  base: parts({
    sidebar: {
      backgroundColor: 'bg.raised',
    },
  }),
});
