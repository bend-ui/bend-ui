'use client';

import * as React from 'react';
import { PanelLeftIcon } from 'lucide-react';
import { HTMLBendUIProps, bend } from '@bend-ui/internal';
import { createStyleContext } from '@bend-ui/styled-system/jsx';
import { sidebar } from '@bend-ui/styled-system/recipes';
import { ScrollArea } from '../ScrollArea';

const { withProvider, withContext } = createStyleContext(sidebar);

const SIDEBAR_WIDTH = '16rem';
const SIDEBAR_WIDTH_ICON = '3.5rem';
const SIDEBAR_WIDTH_MOBILE = '18rem';
const SIDEBAR_KEYBOARD_SHORTCUT = 'b';
const MOBILE_QUERY = '(max-width: 767px)';

type SidebarContextValue = {
  open: boolean;
  setOpen: (open: boolean) => void;
  openMobile: boolean;
  setOpenMobile: (open: boolean) => void;
  isMobile: boolean;
  toggleSidebar: () => void;
  state: 'expanded' | 'collapsed';
};

const SidebarContext = React.createContext<SidebarContextValue | null>(null);

export const useSidebar = () => {
  const context = React.useContext(SidebarContext);

  if (!context) {
    throw new Error('useSidebar must be used within Sidebar.Provider');
  }

  return context;
};

const useIsMobile = () => {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    if (typeof window.matchMedia !== 'function') {
      return;
    }

    const media = window.matchMedia(MOBILE_QUERY);
    const update = () => setIsMobile(media.matches);

    update();
    media.addEventListener('change', update);

    return () => media.removeEventListener('change', update);
  }, []);

  return isMobile;
};

type SidebarProviderElementProps = HTMLBendUIProps<'div'> & {
  defaultOpen?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
};

const SidebarProviderElement = withProvider(bend.div, 'provider');

const SidebarProvider = (props: SidebarProviderElementProps) => {
  const {
    children,
    defaultOpen = true,
    open: openProp,
    onOpenChange,
    style,
    ...rest
  } = props;
  const [_open, _setOpen] = React.useState(defaultOpen);
  const [openMobile, setOpenMobile] = React.useState(false);
  const isMobile = useIsMobile();
  const open = openProp ?? _open;

  const setOpen = React.useCallback(
    (value: boolean) => {
      onOpenChange?.(value);

      if (openProp === undefined) {
        _setOpen(value);
      }
    },
    [onOpenChange, openProp],
  );

  const toggleSidebar = React.useCallback(() => {
    if (isMobile) {
      setOpenMobile((value) => !value);
      return;
    }

    setOpen(!open);
  }, [isMobile, open, setOpen]);

  React.useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (
        event.key.toLowerCase() !== SIDEBAR_KEYBOARD_SHORTCUT ||
        (!event.metaKey && !event.ctrlKey)
      ) {
        return;
      }

      event.preventDefault();
      toggleSidebar();
    };

    window.addEventListener('keydown', onKeyDown);

    return () => window.removeEventListener('keydown', onKeyDown);
  }, [toggleSidebar]);

  const value = React.useMemo<SidebarContextValue>(
    () => ({
      open,
      setOpen,
      openMobile,
      setOpenMobile,
      isMobile,
      toggleSidebar,
      state: open ? 'expanded' : 'collapsed',
    }),
    [isMobile, open, openMobile, setOpen, toggleSidebar],
  );

  return (
    <SidebarContext.Provider value={value}>
      <SidebarProviderElement
        data-state={value.state}
        data-mobile-open={openMobile ? 'true' : 'false'}
        style={
          {
            '--sidebar-width': SIDEBAR_WIDTH,
            '--sidebar-width-icon': SIDEBAR_WIDTH_ICON,
            '--sidebar-width-mobile': SIDEBAR_WIDTH_MOBILE,
            ...style,
          } as React.CSSProperties
        }
        {...rest}
      >
        {children}
      </SidebarProviderElement>
    </SidebarContext.Provider>
  );
};

export interface SidebarRootProps extends HTMLBendUIProps<'aside'> {
  children?: React.ReactNode;
  side?: 'left' | 'right';
  variant?: 'sidebar' | 'floating' | 'inset';
  collapsible?: 'offcanvas' | 'icon' | 'none';
}

const SidebarRootElement = withContext(bend.aside, 'root');
const SidebarOverlay = withContext(bend.div, 'overlay');

const SidebarRoot = (props: SidebarRootProps) => {
  const {
    children,
    side = 'left',
    variant = 'sidebar',
    collapsible = 'offcanvas',
    ...rest
  } = props;
  const { open, openMobile, setOpenMobile } = useSidebar();

  return (
    <>
      <SidebarOverlay
        aria-hidden="true"
        data-mobile-open={openMobile ? 'true' : 'false'}
        onClick={() => setOpenMobile(false)}
      />
      <SidebarRootElement
        data-side={side}
        data-variant={variant}
        data-collapsible={collapsible}
        data-state={open ? 'expanded' : 'collapsed'}
        data-mobile-open={openMobile ? 'true' : 'false'}
        {...rest}
      >
        {children}
      </SidebarRootElement>
    </>
  );
};

export interface SidebarInsetProps extends HTMLBendUIProps<'main'> {
  children?: React.ReactNode;
}

const SidebarInset = withContext(bend.main, 'inset');

export interface SidebarTriggerProps extends HTMLBendUIProps<'button'> {
  children?: React.ReactNode;
}

const SidebarTriggerElement = withContext(bend.button, 'trigger');

const SidebarTrigger = (props: SidebarTriggerProps) => {
  const { children, type = 'button', onClick, ...rest } = props;
  const { toggleSidebar } = useSidebar();

  return (
    <SidebarTriggerElement
      type={type}
      aria-label="Toggle sidebar"
      onClick={(event) => {
        onClick?.(event);
        toggleSidebar();
      }}
      {...rest}
    >
      {children ?? <PanelLeftIcon aria-hidden="true" />}
    </SidebarTriggerElement>
  );
};

const SidebarHeader = withContext(bend.div, 'header');
const SidebarContent = withContext(ScrollArea, 'content');
const SidebarFooter = withContext(bend.div, 'footer');
const SidebarLabel = withContext(bend.span, 'label');
const SidebarGroup = withContext(bend.div, 'group');
const SidebarGroupLabel = withContext(bend.div, 'groupLabel');
const SidebarGroupAction = withContext(bend.button, 'groupAction');
const SidebarGroupContent = withContext(bend.div, 'groupContent');
const SidebarMenu = withContext(bend.ul, 'menu');
const SidebarMenuItem = withContext(bend.li, 'menuItem');
const SidebarMenuAction = withContext(bend.button, 'menuAction');
const SidebarMenuBadge = withContext(bend.div, 'menuBadge');
const SidebarMenuSub = withContext(bend.ul, 'menuSub');
const SidebarMenuSubItem = withContext(bend.li, 'menuSubItem');
const SidebarMenuSubButton = withContext(bend.a, 'menuSubButton');
const SidebarRailElement = withContext(bend.button, 'rail');

export interface SidebarMenuButtonProps extends HTMLBendUIProps<'button'> {
  isActive?: boolean;
  tooltip?: string;
}

const SidebarMenuButtonElement = withContext(bend.button, 'menuButton');

const SidebarMenuButton = (props: SidebarMenuButtonProps) => {
  const { isActive, tooltip, title, ...rest } = props;

  return (
    <SidebarMenuButtonElement
      data-active={isActive ? 'true' : undefined}
      title={title ?? tooltip}
      {...rest}
    />
  );
};

export interface SidebarRailProps extends HTMLBendUIProps<'button'> {
  children?: React.ReactNode;
}

const SidebarRail = (props: SidebarRailProps) => {
  const { type = 'button', onClick, children, ...rest } = props;
  const { toggleSidebar } = useSidebar();

  return (
    <SidebarRailElement
      type={type}
      aria-label="Toggle sidebar"
      onClick={(event) => {
        onClick?.(event);
        toggleSidebar();
      }}
      {...rest}
    >
      {children}
    </SidebarRailElement>
  );
};

export interface SidebarProps extends SidebarRootProps {
  children?: React.ReactNode;
}

const Component = (props: SidebarProps) => {
  return <SidebarRoot {...props} />;
};

Component.displayName = 'Sidebar';

export const Sidebar = Object.assign(Component, {
  Provider: SidebarProvider,
  Root: SidebarRoot,
  Inset: SidebarInset,
  Trigger: SidebarTrigger,
  Header: SidebarHeader,
  Content: SidebarContent,
  Footer: SidebarFooter,
  Group: SidebarGroup,
  GroupLabel: SidebarGroupLabel,
  GroupAction: SidebarGroupAction,
  GroupContent: SidebarGroupContent,
  Menu: SidebarMenu,
  MenuItem: SidebarMenuItem,
  MenuButton: SidebarMenuButton,
  MenuAction: SidebarMenuAction,
  MenuBadge: SidebarMenuBadge,
  MenuSub: SidebarMenuSub,
  MenuSubItem: SidebarMenuSubItem,
  MenuSubButton: SidebarMenuSubButton,
  Rail: SidebarRail,
  // Backward-compatible aliases for the original small sidebar API.
  Item: SidebarMenuItem,
  Label: SidebarLabel,
  Link: SidebarMenuButton,
});
