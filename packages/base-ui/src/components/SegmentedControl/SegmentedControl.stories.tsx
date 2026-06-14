import { Meta, StoryObj } from '@storybook/react-vite';
import { SegmentedControl } from './SegmentedControl';

const meta: Meta<typeof SegmentedControl> = {
  title: 'Components/Navigation/SegmentedControl',
  component: SegmentedControl,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const QueueFilters: Story = {
  render: () => (
    <SegmentedControl aria-label="Patient queue filters" defaultValue="today">
      <SegmentedControl.List>
        <SegmentedControl.Item value="today">Today</SegmentedControl.Item>
        <SegmentedControl.Item value="approvals">
          Approvals
        </SegmentedControl.Item>
        <SegmentedControl.Item value="billing">Billing</SegmentedControl.Item>
      </SegmentedControl.List>
    </SegmentedControl>
  ),
};

export const DenseDashboardTabs: Story = {
  render: () => (
    <SegmentedControl
      aria-label="Operations filters"
      defaultValue="holds"
      size="sm"
    >
      <SegmentedControl.List>
        <SegmentedControl.Item value="holds">Lift holds</SegmentedControl.Item>
        <SegmentedControl.Item value="terrain">Terrain</SegmentedControl.Item>
        <SegmentedControl.Item value="events">Events</SegmentedControl.Item>
      </SegmentedControl.List>
    </SegmentedControl>
  ),
};
