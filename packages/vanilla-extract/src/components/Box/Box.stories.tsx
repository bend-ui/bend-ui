import { Box } from './Box';
import type { Meta, StoryObj } from '@storybook/react';

export default {
  component: Box,
  title: 'Box',
  args: {
    children: 'Box',
  },
} as Meta<typeof Box>;

type Story = StoryObj<typeof Box>;

export const Primary: Story = {
  args: {
    sx: {
      paddingY: 'xl',
      paddingX: 'sm',
      background: 'blue200',
    },
  },
};
