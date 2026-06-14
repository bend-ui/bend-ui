import { bend } from '@bend-ui/react';
import { createStyleContext } from '@bend-ui/styled-system/jsx';
import { sidebar } from '@bend-ui/styled-system/recipes';
import type { ComponentProps } from 'react';
import { ScrollArea } from '../ScrollArea';

const { withProvider, withContext } = createStyleContext(sidebar);

const SidebarRoot = withProvider(bend.div, 'root');

const SidebarHeader = withContext(bend.div, 'header');

const SidebarContent = withContext(ScrollArea, 'content');

const SidebarFooter = withContext(bend.div, 'footer');

const SidebarItem = withContext(bend.div, 'item');

const SidebarLabel = withContext(bend.div, 'label');

const SidebarLink = withContext(bend.a, 'link');

export type SidebarRootProps = ComponentProps<typeof SidebarRoot>;
export type SidebarHeaderProps = ComponentProps<typeof SidebarHeader>;
export type SidebarContentProps = ComponentProps<typeof SidebarContent>;
export type SidebarFooterProps = ComponentProps<typeof SidebarFooter>;
export type SidebarItemProps = ComponentProps<typeof SidebarItem>;
export type SidebarLabelProps = ComponentProps<typeof SidebarLabel>;
export type SidebarLinkProps = ComponentProps<typeof SidebarLink>;
export type SidebarProps = SidebarRootProps;

const Component = (props: SidebarProps) => {
  const { children, ...rest } = props;
  return <SidebarRoot {...rest}>{children}</SidebarRoot>;
};

Component.displayName = 'Sidebar';

export const Sidebar = Object.assign(Component, {
  Root: SidebarRoot,
  Header: SidebarHeader,
  Content: SidebarContent,
  Footer: SidebarFooter,
  Item: SidebarItem,
  Label: SidebarLabel,
  Link: SidebarLink,
});
