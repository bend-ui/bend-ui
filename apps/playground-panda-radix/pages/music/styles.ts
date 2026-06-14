import { sva } from '@bend-ui/styled-system/css';

export const layout = sva({
  slots: ['root', 'menu', 'sidebar', 'main'],
  base: {
    root: {
      height: 'screen',
      display: 'grid',
      gridTemplateColumns: 'auto 1fr',
      gridTemplateRows: 'auto 1fr',
      gap: '0px 0px',
      gridTemplateAreas: ' "menu menu" "sidebar main-content"',
    },
    menu: {
      gridArea: 'menu',
      borderBottom: 'divider',
      p: 'sm',
    },
    sidebar: {
      gridArea: 'sidebar',
      p: 'lg',
      borderRight: 'divider',
    },
    main: {
      gridArea: 'main-content',
      p: 'lg',
    },
  },
});
