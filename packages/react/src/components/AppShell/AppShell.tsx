'use client';

import { ReactNode } from 'react';
import { appShell } from '@bend-ui/styled-system/recipes';

interface AppShellProps {
  children?: ReactNode;
}

/** Full-page layout shell. Positions child regions only — does not render navigation, headers, or sidebar UI. */
const Root = (props: AppShellProps) => {
  const { children } = props;
  const classes = appShell();
  return <div className={classes}>{children}</div>;
};

Root.displayName = 'AppShell';

interface AppShellBannerProps {
  children?: ReactNode;
}

/** Top-of-page placement region for app-wide notifications. Provide your own banner content (alerts, announcements, etc.). */
const Banner = (props: AppShellBannerProps) => {
  const { children } = props;
  return <div data-part="banner">{children}</div>;
};

Banner.displayName = 'AppShell.Banner';

interface AppShellHeaderProps {
  children?: ReactNode;
}

/** Top placement region. Provide your own header content (title bar, toolbar, etc.). */
const Header = (props: AppShellHeaderProps) => {
  const { children } = props;
  return <header data-part="header">{children}</header>;
};

Header.displayName = 'AppShell.Header';

interface AppShellSidebarProps {
  children?: ReactNode;
}

/** Left placement region. Renders an `<aside>` — provide your own sidebar content (navigation, filters, etc.), not a pre-built sidebar component. */
const Sidebar = (props: AppShellSidebarProps) => {
  const { children } = props;
  return <aside data-part="sidebar">{children}</aside>;
};

Sidebar.displayName = 'AppShell.Sidebar';

interface AppShellBodyProps {
  children?: ReactNode;
}

/** Horizontal body row that grows to fill remaining vertical space. Wraps `Sidebar` and `Main` side by side. */
const Body = (props: AppShellBodyProps) => {
  const { children } = props;
  return <div data-part="body">{children}</div>;
};

Body.displayName = 'AppShell.Body';

interface AppShellMainProps {
  children?: ReactNode;
}

/** Primary content column. Renders `<main>` — use once per page and do not nest another `<main>` inside. May contain nested shell regions (`Header`, `ScrollArea`, `Footer`). */
const Main = (props: AppShellMainProps) => {
  const { children } = props;
  return <main data-part="main">{children}</main>;
};

Main.displayName = 'AppShell.Main';

interface AppShellScrollAreaProps {
  children?: ReactNode;
}

/** Scrollable sub-region within `Main`. Keeps sibling header/footer fixed while content scrolls. */
const ScrollArea = (props: AppShellScrollAreaProps) => {
  const { children } = props;
  return <div data-part="scroll-area">{children}</div>;
};

ScrollArea.displayName = 'AppShell.ScrollArea';

interface AppShellFooterProps {
  children?: ReactNode;
}

/** Bottom placement region. Provide your own footer content. */
const Footer = (props: AppShellFooterProps) => {
  const { children } = props;
  return <footer data-part="footer">{children}</footer>;
};

Footer.displayName = 'AppShell.Footer';

export default Object.assign(Root, {
  Root,
  Banner,
  Header,
  Sidebar,
  Body,
  Main,
  ScrollArea,
  Footer,
});
