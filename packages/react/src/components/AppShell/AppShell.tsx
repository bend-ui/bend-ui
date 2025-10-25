'use client';

import { ReactNode } from 'react';
import { appShell } from '@particles/styled-system/recipes';

interface AppShellProps {
  children?: ReactNode;
}

const Root = (props: AppShellProps) => {
  const { children } = props;
  const classes = appShell();
  return <div className={classes}>{children}</div>;
};

interface AppShellHeaderProps {
  children?: ReactNode;
}

const Header = (props: AppShellHeaderProps) => {
  const { children } = props;
  return <div data-part="header">{children}</div>;
};

interface AppShellSidebarProps {
  children?: ReactNode;
}

const Sidebar = (props: AppShellSidebarProps) => {
  const { children } = props;
  return <div data-part="sidebar">{children}</div>;
};

interface AppShellMainProps {
  children?: ReactNode;
}

const Main = (props: AppShellMainProps) => {
  const { children } = props;
  return <div data-part="main">{children}</div>;
};

interface AppShellFooterProps {
  children?: ReactNode;
}

const Footer = (props: AppShellFooterProps) => {
  const { children } = props;
  return <div data-part="footer">{children}</div>;
};

export default Object.assign(Root, {
  Root,
  Header,
  Sidebar,
  Main,
  Footer,
});
