import { Meta, StoryObj } from '@storybook/react-vite';
import {
  CalendarDaysIcon,
  LayoutDashboardIcon,
  Users2Icon,
} from 'lucide-react';
import { Sidebar } from './Sidebar';

const meta: Meta<typeof Sidebar> = {
  title: 'Components/Navigation/Sidebar',
  component: Sidebar,
};

export default meta;

type Story = StoryObj<typeof meta>;

const navItems = [
  { href: '#overview', label: 'Overview', icon: LayoutDashboardIcon },
  { href: '#patients', label: 'Patients', icon: Users2Icon },
  { href: '#appointments', label: 'Appointments', icon: CalendarDaysIcon },
];

export const Default: Story = {
  render: () => (
    <Sidebar>
      <Sidebar.Header>Dental Management</Sidebar.Header>
      <Sidebar.Content>
        <nav aria-label="Dental management">
          {navItems.map((item) => (
            <Sidebar.Item key={item.href}>
              <Sidebar.Link href={item.href}>
                <item.icon aria-hidden />
                <Sidebar.Label>{item.label}</Sidebar.Label>
              </Sidebar.Link>
            </Sidebar.Item>
          ))}
        </nav>
      </Sidebar.Content>
      <Sidebar.Footer>Clinic workspace</Sidebar.Footer>
    </Sidebar>
  ),
};
