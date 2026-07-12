import { Meta, StoryObj } from '@storybook/react-vite';
import {
  AlertTriangleIcon,
  CalendarIcon,
  CreditCardIcon,
  UsersIcon,
} from 'lucide-react';
import {
  ActionItem,
  Metric,
  PageHeader,
  PanelHeader,
  ResponsiveGrid,
  Surface,
  TimelineItem,
} from './Patterns';
import { Badge } from '../Badge';
import { Input } from '../Input';
import { Stack } from '@bend-ui/styled-system/jsx';

const meta: Meta<typeof Surface> = {
  title: 'Patterns/Operational',
  component: Surface,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const DashboardShell: Story = {
  render: () => (
    <Stack gap="6">
      <PageHeader
        eyebrow="Mountain ops"
        title="Lift status"
        description="Monitor terrain, lift holds, incident response, and event capacity from one working surface."
        action="Create report"
      />
      <ResponsiveGrid>
        <Metric
          icon={<UsersIcon />}
          label="Active patients"
          value="1,428"
          detail="12 waiting for approval"
          tone="success"
          trend="+8"
        />
        <Metric
          icon={<CreditCardIcon />}
          label="Revenue"
          value="$48.2k"
          detail="Collected today"
          tone="info"
        />
        <Metric
          icon={<CalendarIcon />}
          label="Appointments"
          value="86"
          detail="14 remaining"
          tone="neutral"
        />
        <Metric
          icon={<AlertTriangleIcon />}
          label="Alerts"
          value="3"
          detail="Two lift holds"
          tone="warning"
        />
      </ResponsiveGrid>
      <Surface>
        <Stack gap="4">
          <PanelHeader
            title="Response board"
            description="Dense list rows for schedules, clients, terrain zones, and incident queues."
          />
          <TimelineItem
            avatarFallback="MC"
            description="Cleaning room 3"
            metadata="09:30"
            status="success"
            statusLabel="Checked in"
            title="Maya Chen"
          />
          <TimelineItem
            leading={<Badge tone="warning">Hold</Badge>}
            description="Wind advisory above mid-mountain"
            metadata="10:05"
            status="warning"
            statusLabel="Patrol ack"
            title="North Ridge Express"
          />
        </Stack>
      </Surface>
    </Stack>
  ),
};

export const ActionRowsAndInputs: Story = {
  render: () => (
    <Surface>
      <Stack gap="4">
        <PanelHeader title="Quick actions" />
        <Stack gap="2">
          <ActionItem
            icon={<CalendarIcon />}
            description="Book a chair and hygienist"
          >
            Schedule appointment
          </ActionItem>
          <ActionItem
            icon={<CreditCardIcon />}
            description="Send the open invoice reminder"
          >
            Collect payment
          </ActionItem>
        </Stack>
        <Stack gap="2" maxW="360px">
          <Input placeholder="Search patients" />
          <Input placeholder="Constrained width inside a layout wrapper" />
        </Stack>
      </Stack>
    </Surface>
  ),
};
