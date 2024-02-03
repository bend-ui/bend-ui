import { sva } from '@particles/styled-system/css';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Main } from './components/Main';
import { Infos } from './components/Infos';

const layout = sva({
  slots: ['root', 'header', 'sidebar', 'main', 'infos'],
  base: {
    root: {
      height: 'screen',
      maxHeight: 'screen',
      overflow: 'hidden',
      display: 'grid',
      gridTemplateColumns: 'auto 1fr auto',
      gridTemplateRows: 'auto 1fr',
      gridTemplateAreas: '"header header header" "sidebar main infos"',
    },
    header: {
      gridArea: 'header',
      borderBottom: '1px solid',
      borderBottomColor: 'divider',
    },
    sidebar: {
      gridArea: 'sidebar',
      borderRight: '1px solid',
      borderRightColor: 'divider',
      overflow: 'hidden',
    },
    main: { gridArea: 'main', overflow: 'hidden' },
    infos: {
      gridArea: 'infos',
      borderLeft: '1px solid',
      borderLeftColor: 'divider',
    },
  },
});

const Messenger = () => {
  const classes = layout();
  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <Header />
      </div>
      <div className={classes.sidebar}>
        <Sidebar />
      </div>
      <div className={classes.main}>
        <Main />
      </div>
      <div className={classes.infos}>
        <Infos />
      </div>
    </div>
  );
};

export default Messenger;
