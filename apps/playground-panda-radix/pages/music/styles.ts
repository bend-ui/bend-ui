import { sva } from '@particles/styled-system/css';

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
      borderBottom: '1px solid',
      borderBottomColor: 'divider',
      p: 'sm',
    },
    sidebar: {
      gridArea: 'sidebar',
      p: 'lg',
      borderRight: '1px solid',
      borderRightColor: 'divider',
    },
    main: {
      gridArea: 'main-content',
      p: 'lg',
    },
  },
});
