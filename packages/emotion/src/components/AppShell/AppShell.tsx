import { createComponent } from '@particles/primitives';
import useStyles from './AppShell.styles';
import type {
  AppShellFooterProps,
  AppShellHeaderProps,
  AppShellMainProps,
  AppShellNotificationBarProps,
  AppShellProps,
  AppShellSidebarProps,
} from './types';

const NotificationBar = ({ children }: AppShellNotificationBarProps) => {
  const { styles } = useStyles({}, { name: 'AppShell' });

  return <div className={styles.notificationBar}>{children}</div>;
};

const Header = ({ children }: AppShellHeaderProps) => {
  const { styles } = useStyles({}, { name: 'AppShell' });

  return <header className={styles.header}>{children}</header>;
};

const Sidebar = ({ children }: AppShellSidebarProps) => {
  const { styles } = useStyles({}, { name: 'AppShell' });

  return <aside className={styles.sidebar}>{children}</aside>;
};

const Main = ({ children }: AppShellMainProps) => {
  const { styles } = useStyles({}, { name: 'AppShell' });

  return <main className={styles.main}>{children}</main>;
};

const Footer = ({ children }: AppShellFooterProps) => {
  const { styles } = useStyles({}, { name: 'AppShell' });

  return <footer className={styles.footer}>{children}</footer>;
};

const AppShell = (props: AppShellProps) => {
  const { children, layout = 'holyGrail' } = props;
  const { styles } = useStyles({ layout }, { name: 'AppShell' });

  return <div className={styles.root}>{children}</div>;
};

export default createComponent(AppShell, {
  NotificationBar,
  Header,
  Sidebar,
  Main,
  Footer,
});
