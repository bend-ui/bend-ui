import { HTMLParticlesProps, particles } from '@particles/react';
import { cx } from '@particles/styled-system/css';
import { sidebar } from '@particles/styled-system/recipes';

export interface SidebarRootProps extends HTMLParticlesProps<'div'> {
  children?: React.ReactNode;
}

const SidebarRoot = (props: SidebarRootProps) => {
  const { children, className, ...rest } = props;
  const classes = sidebar();

  return (
    <particles.div className={cx(classes, className)} {...rest}>
      {children}
    </particles.div>
  );
};

export interface SidebarHeaderProps extends HTMLParticlesProps<'div'> {
  children?: React.ReactNode;
}

const SidebarHeader = (props: SidebarHeaderProps) => {
  const { children, ...rest } = props;
  return <particles.div {...rest}>{children}</particles.div>;
};

export interface SidebarContentProps extends HTMLParticlesProps<'div'> {
  children?: React.ReactNode;
}

const SidebarContent = (props: SidebarContentProps) => {
  const { children, ...rest } = props;
  return <particles.div {...rest}>{children}</particles.div>;
};

export interface SidebarFooterProps extends HTMLParticlesProps<'div'> {
  children?: React.ReactNode;
}

const SidebarFooter = (props: SidebarFooterProps) => {
  const { children, ...rest } = props;
  return <particles.div {...rest}>{children}</particles.div>;
};

export interface SidebarProps extends SidebarRootProps {
  children?: React.ReactNode;
}

const Component = () => {
  return <SidebarRoot>Sidebar</SidebarRoot>;
};

Component.displayName = 'Sidebar';

export const Sidebar = Object.assign(Component, {
  Root: SidebarRoot,
  Header: SidebarHeader,
  Content: SidebarContent,
  Footer: SidebarFooter,
});
