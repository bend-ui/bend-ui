import { NavLink } from 'react-router-dom';
import { Sidebar } from '@bend-ui/ark';

const navItems = [
  { to: 'overview', label: 'Overview' },
  { to: 'patients', label: 'Patients' },
  { to: 'billing', label: 'Billing' },
];

export const SidebarComponent = () => {
  return (
    <Sidebar>
      <Sidebar.Header>Dental Management</Sidebar.Header>
      <Sidebar.Content>
        <nav aria-label="Dental management">
          {navItems.map((item) => (
            <Sidebar.Item key={item.to}>
              <Sidebar.Link asChild>
                <NavLink to={item.to}>
                  <Sidebar.Label>{item.label}</Sidebar.Label>
                </NavLink>
              </Sidebar.Link>
            </Sidebar.Item>
          ))}
        </nav>
      </Sidebar.Content>
      <Sidebar.Footer>Clinic workspace</Sidebar.Footer>
    </Sidebar>
  );
};
