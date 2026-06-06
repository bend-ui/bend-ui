import { Meta, StoryObj } from '@storybook/react-vite';
import { Sidebar } from './Sidebar';
import { CreditCardIcon, LayoutDashboardIcon, UsersIcon } from 'lucide-react';

const meta: Meta<typeof Sidebar> = {
  title: 'Components/Navigation/Sidebar',
  component: Sidebar,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div style={{ width: 280, height: 420 }}>
      <Sidebar>
        <Sidebar.Header>Dental Management</Sidebar.Header>
        <Sidebar.Content>
          <nav aria-label="Dental management">
            <Sidebar.Item>
              <Sidebar.Link href="#overview" aria-current="page">
                <LayoutDashboardIcon />
                <Sidebar.Label>Overview</Sidebar.Label>
              </Sidebar.Link>
            </Sidebar.Item>
            <Sidebar.Item>
              <Sidebar.Link href="#patients">
                <UsersIcon />
                <Sidebar.Label>Patients</Sidebar.Label>
              </Sidebar.Link>
            </Sidebar.Item>
            <Sidebar.Item>
              <Sidebar.Link href="#billing">
                <CreditCardIcon />
                <Sidebar.Label>Billing</Sidebar.Label>
              </Sidebar.Link>
            </Sidebar.Item>
          </nav>
        </Sidebar.Content>
        <Sidebar.Footer>Clinic workspace</Sidebar.Footer>
      </Sidebar>
    </div>
  ),
};
