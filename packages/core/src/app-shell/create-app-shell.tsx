'use client';

import { css, cx } from '@bend-ui/styled-system/css';
import * as React from 'react';
import type { ComponentType, ReactNode } from 'react';
import { appShell } from '@bend-ui/styled-system/recipes';

export interface AppShellScrollAreaProps {
  children?: ReactNode;
}

export interface CreateAppShellOptions {
  ScrollArea: ComponentType<AppShellScrollAreaProps>;
}

const nativeScrollAreaClassName = css({
  overflow: 'auto',
  scrollbarWidth: 'thin',
  scrollbarColor: '{colors.border.weak}',
});

/** Default scroll region using native overflow — for packages without a ScrollArea primitive. */
export const createNativeScrollArea = () => {
  const NativeScrollArea = (props: AppShellScrollAreaProps) => {
    const { children } = props;
    return (
      <div data-part="scroll-area" className={nativeScrollAreaClassName}>
        {children}
      </div>
    );
  };

  NativeScrollArea.displayName = 'AppShell.ScrollArea';
  return NativeScrollArea;
};

const scrollAreaHostClassName = css({
  display: 'flex',
  flexDirection: 'column',
});

const scrollAreaFillClassName = css({
  flex: 1,
  minH: 0,
});

/** Wraps a package ScrollArea primitive as the app shell scroll region. */
export const createScrollAreaPart = <P extends AppShellScrollAreaProps>(
  ScrollAreaComponent: ComponentType<P>,
) => {
  const ScrollAreaPart = (props: P) => {
    const { children, className, ...rest } = props as P & {
      className?: string;
    };
    return (
      <div data-part="scroll-area" className={scrollAreaHostClassName}>
        <ScrollAreaComponent
          {...(rest as P)}
          className={cx(scrollAreaFillClassName, className)}
        >
          {children}
        </ScrollAreaComponent>
      </div>
    );
  };

  ScrollAreaPart.displayName = 'AppShell.ScrollArea';
  return ScrollAreaPart;
};

export interface AppShellProps {
  children?: ReactNode;
}

export interface AppShellBannerProps {
  children?: ReactNode;
}

export interface AppShellHeaderProps {
  children?: ReactNode;
}

export interface AppShellSidebarProps {
  children?: ReactNode;
}

export interface AppShellBodyProps {
  children?: ReactNode;
}

export interface AppShellMainProps {
  children?: ReactNode;
}

export interface AppShellFooterProps {
  children?: ReactNode;
}

export const createAppShell = (options: CreateAppShellOptions) => {
  const { ScrollArea } = options;

  /** Full-page layout shell. Positions child regions only — does not render navigation, headers, or sidebar UI. */
  const Root = (props: AppShellProps) => {
    const { children } = props;
    const classes = appShell();
    return <div className={classes}>{children}</div>;
  };

  Root.displayName = 'AppShell';

  /** Top-of-page placement region for app-wide notifications. Provide your own banner content (alerts, announcements, etc.). */
  const Banner = (props: AppShellBannerProps) => {
    const { children } = props;
    return <div data-part="banner">{children}</div>;
  };

  Banner.displayName = 'AppShell.Banner';

  /** Top placement region. Provide your own header content (title bar, toolbar, etc.). */
  const Header = (props: AppShellHeaderProps) => {
    const { children } = props;
    return <header data-part="header">{children}</header>;
  };

  Header.displayName = 'AppShell.Header';

  /** Left placement region. Renders an `<aside>` — provide your own sidebar content (navigation, filters, etc.), not a pre-built sidebar component. */
  const Sidebar = (props: AppShellSidebarProps) => {
    const { children } = props;
    return <aside data-part="sidebar">{children}</aside>;
  };

  Sidebar.displayName = 'AppShell.Sidebar';

  /** Horizontal body row that grows to fill remaining vertical space. Wraps `Sidebar` and `Main` side by side. */
  const Body = (props: AppShellBodyProps) => {
    const { children } = props;
    return <div data-part="body">{children}</div>;
  };

  Body.displayName = 'AppShell.Body';

  /** Primary content column. Renders `<main>` — use once per page and do not nest another `<main>` inside. May contain nested shell regions (`Header`, `ScrollArea`, `Footer`). */
  const Main = (props: AppShellMainProps) => {
    const { children } = props;
    return <main data-part="main">{children}</main>;
  };

  Main.displayName = 'AppShell.Main';

  /** Bottom placement region. Provide your own footer content. */
  const Footer = (props: AppShellFooterProps) => {
    const { children } = props;
    return <footer data-part="footer">{children}</footer>;
  };

  Footer.displayName = 'AppShell.Footer';

  return Object.assign(Root, {
    Root,
    Banner,
    Header,
    Sidebar,
    Body,
    Main,
    ScrollArea,
    Footer,
  });
};

export type AppShell = ReturnType<typeof createAppShell>;
