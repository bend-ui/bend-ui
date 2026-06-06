import { AppShell } from '@particles/ark';
import { SidebarComponent } from './Sidebar';

export interface LayoutProps {
  children?: React.ReactNode;
}

export const Layout = (props: LayoutProps) => {
  return (
    <AppShell>
      <AppShell.Sidebar>
        <SidebarComponent />
      </AppShell.Sidebar>
      <AppShell.Main>{props.children}</AppShell.Main>
    </AppShell>
  );
};
