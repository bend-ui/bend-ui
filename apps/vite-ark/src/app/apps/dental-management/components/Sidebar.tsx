import { NavLink } from 'react-router-dom';
import { Sidebar } from '@particles/ark';

export const SidebarComponent = () => {
  return (
    <Sidebar>
      <Sidebar.Header>Dental Management</Sidebar.Header>
      <Sidebar.Content>
        <nav>
          <Sidebar.Item>
            <Sidebar.Link asChild>
              <NavLink to="overview">Overview</NavLink>
            </Sidebar.Link>
          </Sidebar.Item>
          <Sidebar.Item>
            <Sidebar.Link asChild>
              <NavLink to="patients">Patients</NavLink>
            </Sidebar.Link>
          </Sidebar.Item>
          <Sidebar.Item>
            <Sidebar.Link asChild>
              <NavLink to="billing">Billing</NavLink>
            </Sidebar.Link>
          </Sidebar.Item>
        </nav>
      </Sidebar.Content>
      <Sidebar.Footer>© 2024 Dental Management</Sidebar.Footer>
    </Sidebar>
  );
};
