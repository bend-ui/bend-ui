import { Sidebar as SidebarPrimitive } from '@bend-ui/base-ui';
import {
  AlertTriangleIcon,
  CalendarDaysIcon,
  CloudSnowIcon,
  ContactIcon,
  CableIcon,
} from 'lucide-react';
import { NavLink } from 'react-router-dom';

const navItems = [
  {
    to: 'slope-conditions',
    label: 'Slope Conditions',
    icon: <CloudSnowIcon />,
  },
  {
    to: 'lift-status',
    label: 'Lift Status',
    icon: <CableIcon />,
  },
  {
    to: 'events',
    label: 'Events',
    icon: <CalendarDaysIcon />,
  },
  {
    to: 'clients',
    label: 'Clients',
    icon: <ContactIcon />,
  },
  {
    to: 'incidents',
    label: 'Incidents',
    icon: <AlertTriangleIcon />,
  },
] as const;

export const Sidebar = () => {
  return (
    <SidebarPrimitive collapsible="icon">
      <SidebarPrimitive.Header>Alpine Peak</SidebarPrimitive.Header>
      <SidebarPrimitive.Content>
        <SidebarPrimitive.Group>
          <SidebarPrimitive.GroupLabel>Operations</SidebarPrimitive.GroupLabel>
          <SidebarPrimitive.GroupContent>
            <nav aria-label="Ski resort">
              <SidebarPrimitive.Menu>
                {navItems.map((item) => (
                  <SidebarPrimitive.MenuItem key={item.to}>
                    <SidebarPrimitive.MenuButton asChild tooltip={item.label}>
                      <NavLink to={item.to}>
                        {item.icon}
                        <SidebarPrimitive.Label>{item.label}</SidebarPrimitive.Label>
                      </NavLink>
                    </SidebarPrimitive.MenuButton>
                  </SidebarPrimitive.MenuItem>
                ))}
              </SidebarPrimitive.Menu>
            </nav>
          </SidebarPrimitive.GroupContent>
        </SidebarPrimitive.Group>
      </SidebarPrimitive.Content>
      <SidebarPrimitive.Footer>Mountain operations</SidebarPrimitive.Footer>
      <SidebarPrimitive.Rail />
    </SidebarPrimitive>
  );
};
