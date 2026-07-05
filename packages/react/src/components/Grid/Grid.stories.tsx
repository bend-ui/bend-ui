import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import { Grid } from './Grid';

const meta = {
  component: Grid,
  tags: ['ai-generated'],
  args: {
    columns: 3,
    gap: 'md',
  },
} satisfies Meta<typeof Grid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => (
    <Grid {...args}>
      <Grid.Item p="md" bg="bg.surface" rounded="md">
        One
      </Grid.Item>
      <Grid.Item p="md" bg="bg.surface" rounded="md">
        Two
      </Grid.Item>
      <Grid.Item p="md" bg="bg.surface" rounded="md">
        Three
      </Grid.Item>
    </Grid>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByText('One')).toBeVisible();
    await expect(canvas.getByText('Three')).toBeVisible();
  },
};

export const TwoColumns: Story = {
  render: (args) => (
    <Grid {...args} columns={2}>
      <Grid.Item p="sm" bg="bg.surface">
        A
      </Grid.Item>
      <Grid.Item p="sm" bg="bg.surface">
        B
      </Grid.Item>
    </Grid>
  ),
};

export const SpanningItem: Story = {
  render: (args) => (
    <Grid {...args}>
      <Grid.Item colSpan={2} p="md" bg="bg.surface">
        Wide
      </Grid.Item>
      <Grid.Item p="md" bg="bg.surface">
        Narrow
      </Grid.Item>
    </Grid>
  ),
};
