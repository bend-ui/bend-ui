import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import { Button } from '../Button';
import { Stack } from './Stack';

const meta = {
  component: Stack,
  tags: ['ai-generated'],
  args: {
    gap: 'md',
  },
} satisfies Meta<typeof Stack>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => (
    <Stack {...args}>
      <Button>First</Button>
      <Button variant="secondary">Second</Button>
      <Button variant="ghost">Third</Button>
    </Stack>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('button', { name: 'First' })).toBeVisible();
  },
};

export const Horizontal: Story = {
  args: {
    direction: 'row',
    align: 'center',
  },
  render: (args) => (
    <Stack {...args}>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </Stack>
  ),
};

export const Spaced: Story = {
  args: {
    gap: 'xl',
    align: 'start',
  },
  render: (args) => (
    <Stack {...args}>
      <span>Top</span>
      <span>Middle</span>
      <span>Bottom</span>
    </Stack>
  ),
};
