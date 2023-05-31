import { Box } from '../Box';
import { Stack } from './Stack';
import type { StoryObj, Meta, StoryFn } from '@storybook/react';

export default {
  title: 'Layout/Stack',
  component: Stack,
} as Meta<typeof Stack>;

export const Base: StoryObj<typeof Stack> = {
  render: (args) => (
    <Stack {...args}>
      <Box>Item</Box>
      <Box>Item</Box>
      <Box>Item</Box>
    </Stack>
  ),
};
