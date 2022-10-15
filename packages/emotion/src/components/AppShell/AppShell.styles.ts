import { createStyles } from '../../styles';

const layouts = {
  holyGrail: {
    gridTemplateColumns: '320px 1fr auto',
    gridTemplateRows: 'auto auto 1fr auto',
    gridTemplateAreas:
      '"notificationBar notificationBar notificationBar" "header header header" "sidebar main right" "footer footer footer"',
  },
  alt: {
    gridTemplateColumns: 'auto 1fr auto',
    gridTemplateRows: 'auto auto 1fr auto',
    gridTemplateAreas:
      '"notificationBar notificationBar notificationBar" "sidebar header header" "sidebar main right" "sidebar footer footer"',
  },
};

export default createStyles(({ layout }) => ({
  root: {
    display: 'grid',
    ...layouts[layout],
    width: '100vw',
    height: '100vh',
    '@supports (-webkit-touch-callout: none)': {
      height: '-webkit-fill-available',
    },
  },
  notificationBar: {
    gridArea: 'notificationBar',
  },
  header: {
    gridArea: 'header',
  },
  sidebar: {
    gridArea: 'sidebar',
    minWidth: '300px',
    p: '$md',
    borderRightWidth: '1px',
    borderRightStyle: 'solid',
    borderRightColor: '$outline',
  },
  main: {
    gridArea: 'main',
    p: '$sm',
  },
  footer: {
    gridArea: 'footer',
    p: '$sm',
  },
}));
