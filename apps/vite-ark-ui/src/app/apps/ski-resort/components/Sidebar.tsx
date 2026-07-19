import { NavLink } from 'react-router-dom';
import { Sidebar } from '@bend-ui/ark-ui';
import {
  CableCarIcon,
  CalendarDaysIcon,
  LayoutDashboardIcon,
  SnowflakeIcon,
  TriangleAlertIcon,
  Users2Icon,
} from 'lucide-react';

export const SidebarComponent = () => {
  return (
    <Sidebar>
      <Sidebar.Header>Alpine Peak</Sidebar.Header>
      <Sidebar.Content>
        <Sidebar.Item>
          <Sidebar.Link asChild>
            <NavLink to="/ski-resort">
              <LayoutDashboardIcon />
              <Sidebar.Label>Overview</Sidebar.Label>
            </NavLink>
          </Sidebar.Link>
        </Sidebar.Item>
        <Sidebar.Item>
          <Sidebar.Link asChild>
            <NavLink to="slope-conditions">
              <SnowflakeIcon />
              <Sidebar.Label>Slope Conditions</Sidebar.Label>
            </NavLink>
          </Sidebar.Link>
        </Sidebar.Item>
        <Sidebar.Item>
          <Sidebar.Link asChild>
            <NavLink to="lift-status">
              <CableCarIcon />
              <Sidebar.Label>Lift Status</Sidebar.Label>
            </NavLink>
          </Sidebar.Link>
        </Sidebar.Item>
        <Sidebar.Item>
          <Sidebar.Link asChild>
            <NavLink to="events">
              <CalendarDaysIcon />
              <Sidebar.Label>Events</Sidebar.Label>
            </NavLink>
          </Sidebar.Link>
        </Sidebar.Item>
        <Sidebar.Item>
          <Sidebar.Link asChild>
            <NavLink to="clients">
              <Users2Icon />
              <Sidebar.Label>Clients</Sidebar.Label>
            </NavLink>
          </Sidebar.Link>
        </Sidebar.Item>
        <Sidebar.Item>
          <Sidebar.Link asChild>
            <NavLink to="incidents">
              <TriangleAlertIcon />
              <Sidebar.Label>Incidents</Sidebar.Label>
            </NavLink>
          </Sidebar.Link>
        </Sidebar.Item>
      </Sidebar.Content>
    </Sidebar>
  );
};
