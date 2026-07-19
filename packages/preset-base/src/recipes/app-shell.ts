import { defineSlotRecipe } from '@pandacss/dev';

export const appShellRecipe = defineSlotRecipe({
  slots: [
    'root',
    'banner',
    'header',
    'footer',
    'main',
    'scrollArea',
    'sidebar',
    'body',
  ],
  className: 'AppShell',
  description:
    'Full-page layout shell. Positions child regions only — does not render navigation, headers, or sidebar UI.',
  base: {
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
      minH: 0,
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
  },
});
