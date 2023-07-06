import { Box } from './Box';
import type { Meta, StoryFn, StoryObj } from '@storybook/react';

export default {
  title: 'Layout/Box',
  component: Box,
} as Meta<typeof Box>;

export const Base: StoryObj<typeof Box> = {
  render: (args) => <Box {...args}>Box</Box>,

  args: {
    sx: {
      backgroundColor: '$blue100',
      padding: '$md',
    },
  },
};
