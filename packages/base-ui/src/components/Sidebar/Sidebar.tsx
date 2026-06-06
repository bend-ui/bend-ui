import { HTMLParticlesProps, particles } from '@particles/react';
import { createStyleContext } from '@particles/styled-system/jsx';
import { sidebar } from '@particles/styled-system/recipes';
import { ScrollArea } from '../ScrollArea';

const { withProvider, withContext } = createStyleContext(sidebar);

export interface SidebarRootProps extends HTMLParticlesProps<'div'> {
  children?: React.ReactNode;
}

const SidebarRoot = withProvider(particles.div, 'root');

export interface SidebarHeaderProps extends HTMLParticlesProps<'div'> {
  children?: React.ReactNode;
}

const SidebarHeader = withContext(particles.div, 'header');

export interface SidebarContentProps extends HTMLParticlesProps<'div'> {
  children?: React.ReactNode;
}

const SidebarContent = withContext(ScrollArea, 'content');

export interface SidebarFooterProps extends HTMLParticlesProps<'div'> {
  children?: React.ReactNode;
}

const SidebarFooter = withContext(particles.div, 'footer');

const SidebarItem = withContext(particles.div, 'item');

const SidebarLabel = withContext(particles.div, 'label');

const SidebarLink = withContext(particles.a, 'link');

export interface SidebarProps extends SidebarRootProps {
  children?: React.ReactNode;
}

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
