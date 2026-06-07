import { Sidebar as SidebarPrimitive } from '@particles/base-ui';
import { Sidebar } from './Sidebar';

export interface LayoutProps {
  children?: React.ReactNode;
}

export const Layout = (props: LayoutProps) => {
  return (
    <SidebarPrimitive.Provider>
      <Sidebar />
      <SidebarPrimitive.Inset>{props.children}</SidebarPrimitive.Inset>
    </SidebarPrimitive.Provider>
  );
};
