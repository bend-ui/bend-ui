import { createComponent } from '@particles/primitives';
import { AppShellProps } from './types';
import useStyles from './AppShell.styles';

const NotificationBar: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { styles } = useStyles({}, { name: 'AppShell' });

  return <div className={styles.notificationBar}>{children}</div>;
};
NotificationBar.displayName = 'AppShell.NotificationBar';

const Header: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { styles } = useStyles({}, { name: 'AppShell' });

  return <header className={styles.header}>{children}</header>;
};
Header.displayName = 'AppShell.Header';

const Sidebar: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { styles } = useStyles({}, { name: 'AppShell' });

  return <aside className={styles.sidebar}>{children}</aside>;
};
Sidebar.displayName = 'AppShell.Sidebar';

const Main: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { styles } = useStyles({}, { name: 'AppShell' });

  return <main className={styles.main}>{children}</main>;
};
Main.displayName = 'AppShell.Main';

const Footer: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { styles } = useStyles({}, { name: 'AppShell' });

  return <footer className={styles.footer}>{children}</footer>;
};
Footer.displayName = 'AppShell.Footer';

const AppShell: React.FC<AppShellProps> = (props) => {
  const { children, layout = 'holyGrail' } = props;
  const { styles } = useStyles({ layout }, { name: 'AppShell' });

  return <div className={styles.root}>{children}</div>;
};

AppShell.displayName = 'AppShell';

export default createComponent(AppShell, {
  NotificationBar,
  Header,
  Sidebar,
  Main,
  Footer,
});
