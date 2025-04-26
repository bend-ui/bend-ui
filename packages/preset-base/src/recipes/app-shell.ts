import { defineParts, defineRecipe } from '@pandacss/dev';

const parts = defineParts({
  root: { selector: '&' },
  header: { selector: '& [data-part="header"]' },
  footer: { selector: '& [data-part="footer"]' },
  main: { selector: '& [data-part="main"]' },
  sidebar: { selector: '& [data-part="sidebar"]' },
});

export const appShellRecipe = defineRecipe({
  className: 'AppShell',
  base: parts({
    root: {
      display: 'grid',
      gridTemplateColumns: 'auto 1fr',
      gridTemplateRows: 'auto 1fr',
      width: 'screen',
      minH: 'screen',
    },
    header: {
      gridColumn: '1 / -1',
    },
    main: {
      gridColumn: '2 / 2',
    },
    sidebar: {
      gridColumn: '1 / 1',
      display: 'flex',
      flexDirection: 'column',
      minW: '240px',
    },
    footer: {
      gridColumn: '1 / -1',
    },
  }),
});
