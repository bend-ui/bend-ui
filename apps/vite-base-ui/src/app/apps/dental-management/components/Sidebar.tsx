import { Sidebar as SidebarPrimitive } from '@particles/base-ui';
import { NavLink } from 'react-router-dom';
import { CreditCardIcon, LayoutDashboardIcon, UsersIcon } from 'lucide-react';

const navItems = [
  {
    to: 'overview',
    label: 'Overview',
    icon: <LayoutDashboardIcon />,
  },
  {
    to: 'patients',
    label: 'Patients',
    icon: <UsersIcon />,
  },
  {
    to: 'billing',
    label: 'Billing',
    icon: <CreditCardIcon />,
  },
] as const;

export const Sidebar = () => {
  return (
    <SidebarPrimitive>
      <SidebarPrimitive.Header>Dental Management</SidebarPrimitive.Header>
      <SidebarPrimitive.Content>
        <nav aria-label="Dental management">
          {navItems.map((item) => (
            <SidebarPrimitive.Item key={item.to}>
              <SidebarPrimitive.Link asChild>
                <NavLink to={item.to}>
                  {item.icon}
                  <SidebarPrimitive.Label>{item.label}</SidebarPrimitive.Label>
                </NavLink>
              </SidebarPrimitive.Link>
            </SidebarPrimitive.Item>
          ))}
        </nav>
      </SidebarPrimitive.Content>
      <SidebarPrimitive.Footer>Clinic workspace</SidebarPrimitive.Footer>
    </SidebarPrimitive>
  );
};
