import { Box } from '../Box';
import { Level } from '.';
import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'Layout/Level',
  component: Level,
} as Meta<typeof Level>;

type Story = StoryObj<typeof Level>;

export const Base: Story = {
  render: (args) => (
    <Level {...args}>
      <Box>Content</Box>
      <Box>Content</Box>
    </Level>
  ),
};
