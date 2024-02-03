import { defineSlotRecipe } from '@pandacss/dev';

export const appShellRecipe = defineSlotRecipe({
  description: '',
  className: 'AppShell',
  slots: ['root', 'header', 'main', 'sidebar'],
  base: {
    root: {
      display: 'grid',
      gridTemplateColumns: 'auto 1fr',
      gridTemplateRows: 'auto 1fr',
      minH: '100vh',
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
  },
});
