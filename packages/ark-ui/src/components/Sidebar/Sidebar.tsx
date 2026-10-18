import type { SlotRecipeComponent } from '@bend-ui/core';
import { bend } from '@bend-ui/core';
import { createSlotRecipeContext } from '@bend-ui/styled-system/jsx';
import { sidebar } from '@bend-ui/styled-system/recipes';
import type { ComponentProps } from 'react';
import { ScrollArea } from '../ScrollArea';

const { withProvider, withContext } = createSlotRecipeContext(sidebar);

const SidebarRoot: SlotRecipeComponent<
  typeof bend.div,
  (typeof sidebar)['__type']
> = withProvider(bend.div, 'root');

const SidebarHeader: SlotRecipeComponent<typeof bend.div> = withContext(
  bend.div,
  'header',
);

const SidebarContent: SlotRecipeComponent<typeof ScrollArea> = withContext(
  ScrollArea,
  'content',
);

const SidebarFooter: SlotRecipeComponent<typeof bend.div> = withContext(
  bend.div,
  'footer',
);

const SidebarItem: SlotRecipeComponent<typeof bend.div> = withContext(
  bend.div,
  'item',
);

const SidebarLabel: SlotRecipeComponent<typeof bend.div> = withContext(
  bend.div,
  'label',
);

const SidebarLink: SlotRecipeComponent<typeof bend.a> = withContext(
  bend.a,
  'link',
);

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

Object.assign(Component, { displayName: 'Sidebar' });

export const Sidebar = Object.assign(Component, {
  Root: SidebarRoot,
  Header: SidebarHeader,
  Content: SidebarContent,
  Footer: SidebarFooter,
  Item: SidebarItem,
  Label: SidebarLabel,
  Link: SidebarLink,
});
