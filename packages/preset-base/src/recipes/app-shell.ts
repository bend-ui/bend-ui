import { defineParts, defineRecipe } from '@pandacss/dev';

const parts = defineParts({
  root: { selector: '&' },
  banner: { selector: '& [data-part="banner"]' },
  header: { selector: '& [data-part="header"]' },
  footer: { selector: '& [data-part="footer"]' },
  main: { selector: '& [data-part="main"]' },
  scrollArea: { selector: '& [data-part="scroll-area"]' },
  sidebar: { selector: '& [data-part="sidebar"]' },
  body: { selector: '& [data-part="body"]' },
});

export const appShellRecipe = defineRecipe({
  className: 'AppShell',
  description: 'Full-page layout shell. Positions child regions only — does not render navigation, headers, or sidebar UI.',
  base: parts({
    root: {
      display: 'flex',
      flexDirection: 'column',
      minW: 'screen',
      maxW: 'screen',
      maxH: 'screen',
      minH: 'screen',
    },
    banner: {
      flex: 0,
      flexShrink: 0,
    },
    header: {
      flex: 0,
      flexShrink: 0,
    },
    scrollArea: {
      flex: 1,
      overflow: 'auto',
      scrollbarWidth: 'thin',
      scrollbarColor: '{colors.border.weak}',
    },
    main: {
      display: 'flex',
      flexDirection: 'column',
      flex: 1,
    },
    body: {
      display: 'flex',
      flex: 1,
    },
    sidebar: {
      flex: 0,
      flexShrink: 0,
    },
    footer: {
      flex: 0,
      flexShrink: 0,
    },
  }),
});
