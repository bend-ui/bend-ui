import { Box, Sidebar as SidebarPrimitive } from '@particles/base-ui';
import { Sidebar } from './Sidebar';

export interface LayoutProps {
  children?: React.ReactNode;
}

export const Layout = (props: LayoutProps) => {
  return (
    <SidebarPrimitive.Provider>
      <Sidebar />
      <SidebarPrimitive.Inset>
        <Box
          display="flex"
          alignItems="center"
          gap="2"
          px="3"
          py="2"
          borderBottom="border.weak"
          bg="bg.page"
          position="sticky"
          top="0"
          zIndex="1"
        >
          <SidebarPrimitive.Trigger aria-label="Toggle ski resort sidebar" />
        </Box>
        {props.children}
      </SidebarPrimitive.Inset>
    </SidebarPrimitive.Provider>
  );
};
