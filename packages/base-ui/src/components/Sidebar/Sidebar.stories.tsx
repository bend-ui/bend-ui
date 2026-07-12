import { Meta, StoryObj } from '@storybook/react-vite';
import {
  AlertTriangleIcon,
  CalendarDaysIcon,
  CableIcon,
  CloudSnowIcon,
  ContactIcon,
} from 'lucide-react';
import { Box, Stack } from '@bend-ui/styled-system/jsx';
import { Sidebar } from './Sidebar';

const meta: Meta<typeof Sidebar> = {
  title: 'Components/Navigation/Sidebar',
  component: Sidebar,
};

export default meta;

type Story = StoryObj<typeof meta>;

const items = [
  { label: 'Slope Conditions', icon: <CloudSnowIcon /> },
  { label: 'Lift Status', icon: <CableIcon /> },
  { label: 'Events', icon: <CalendarDaysIcon /> },
  { label: 'Clients', icon: <ContactIcon /> },
  { label: 'Incidents', icon: <AlertTriangleIcon /> },
] as const;

export const Default: Story = {
  render: () => (
    <Sidebar.Provider style={{ minHeight: 520 }}>
      <Sidebar collapsible="icon">
        <Sidebar.Header>Alpine Peak</Sidebar.Header>
        <Sidebar.Content>
          <Sidebar.Group>
            <Sidebar.GroupLabel>Operations</Sidebar.GroupLabel>
            <Sidebar.GroupContent>
              <Sidebar.Menu aria-label="Ski resort">
                {items.map((item, index) => (
                  <Sidebar.MenuItem key={item.label}>
                    <Sidebar.MenuButton isActive={index === 0} tooltip={item.label}>
                      {item.icon}
                      <Sidebar.Label>{item.label}</Sidebar.Label>
                    </Sidebar.MenuButton>
                  </Sidebar.MenuItem>
                ))}
              </Sidebar.Menu>
            </Sidebar.GroupContent>
          </Sidebar.Group>
        </Sidebar.Content>
        <Sidebar.Footer>Mountain operations</Sidebar.Footer>
        <Sidebar.Rail />
      </Sidebar>
      <Sidebar.Inset>
        <Sidebar.Trigger />
        <Box p="6">
          <Stack gap="2">
            <Box as="h1" fontSize="3xl" fontWeight="bold">
              Sidebar inset
            </Box>
            <Box as="p" color="fg.muted">
              Main content stays in the inset while the sidebar collapses or
              opens as an off-canvas panel on small screens.
            </Box>
          </Stack>
        </Box>
      </Sidebar.Inset>
    </Sidebar.Provider>
  ),
};
