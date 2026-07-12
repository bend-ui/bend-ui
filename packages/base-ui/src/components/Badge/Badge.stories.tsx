import { Meta, StoryObj } from '@storybook/react-vite';
import { Badge } from './Badge';
import { Stack } from '@bend-ui/styled-system/jsx';

const meta: Meta<typeof Badge> = {
  title: 'Components/Data Display/Badge',
  component: Badge,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Statuses: Story = {
  render: () => (
    <Stack direction="row" gap="2" wrap="wrap">
      <Badge tone="neutral">Pending intake</Badge>
      <Badge tone="success">Paid</Badge>
      <Badge tone="warning">Avalanche moderate</Badge>
      <Badge tone="danger">Lift hold</Badge>
      <Badge tone="info">82% capacity</Badge>
    </Stack>
  ),
};

export const Variants: Story = {
  render: () => (
    <Stack direction="row" gap="2" wrap="wrap">
      <Badge variant="solid" tone="success">
        Active patient
      </Badge>
      <Badge variant="subtle" tone="warning">
        Invoice open
      </Badge>
      <Badge variant="outline" tone="info">
        Table metadata
      </Badge>
    </Stack>
  ),
};
