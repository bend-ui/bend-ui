'use client';

import { css, cx } from '@bend-ui/styled-system/css';
import { createStyleContext } from '@bend-ui/styled-system/jsx';
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
    const { children, className } = props as AppShellScrollAreaProps & {
      className?: string;
    };
    return (
      <div
        data-part="scroll-area"
        className={cx(nativeScrollAreaClassName, className)}
      >
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
      <div
        data-part="scroll-area"
        className={cx(scrollAreaHostClassName, className)}
      >
        <ScrollAreaComponent
          {...(rest as P)}
          className={scrollAreaFillClassName}
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

const { withProvider, withContext } = createStyleContext(appShell);

export const createAppShell = (options: CreateAppShellOptions) => {
  const { ScrollArea } = options;

  /** Full-page layout shell. Positions child regions only — does not render navigation, headers, or sidebar UI. */
  const Root = withProvider('div', 'root');

  Root.displayName = 'AppShell';

  /** Top-of-page placement region for app-wide notifications. Provide your own banner content (alerts, announcements, etc.). */
  const Banner = withContext('div', 'banner');

  Banner.displayName = 'AppShell.Banner';

  /** Top placement region. Provide your own header content (title bar, toolbar, etc.). */
  const Header = withContext('header', 'header');

  Header.displayName = 'AppShell.Header';

  /** Left placement region. Renders an `<aside>` — provide your own sidebar content (navigation, filters, etc.), not a pre-built sidebar component. */
  const Sidebar = withContext('aside', 'sidebar');

  Sidebar.displayName = 'AppShell.Sidebar';

  /** Horizontal body row that grows to fill remaining vertical space. Wraps `Sidebar` and `Main` side by side. */
  const Body = withContext('div', 'body');

  Body.displayName = 'AppShell.Body';

  /** Primary content column. Renders `<main>` — use once per page and do not nest another `<main>` inside. May contain nested shell regions (`Header`, `ScrollArea`, `Footer`). */
  const Main = withContext('main', 'main');

  Main.displayName = 'AppShell.Main';

  /** Bottom placement region. Provide your own footer content. */
  const Footer = withContext('footer', 'footer');

  Footer.displayName = 'AppShell.Footer';

  const AppShellScrollArea = withContext(ScrollArea, 'scrollArea');
  AppShellScrollArea.displayName = 'AppShell.ScrollArea';

  return Object.assign(Root, {
    Root,
    Banner,
    Header,
    Sidebar,
    Body,
    Main,
    ScrollArea: AppShellScrollArea,
    Footer,
  });
};

export type AppShell = ReturnType<typeof createAppShell>;
