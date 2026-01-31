import { AppShell } from '@particles/base-ui';

export interface LayoutProps {
  children?: React.ReactNode;
}

export const Layout = (props: LayoutProps) => {
  return (
    <AppShell>
      <AppShell.Sidebar>Sidebar</AppShell.Sidebar>
      <AppShell.Main>{props.children}</AppShell.Main>
    </AppShell>
  );
};
