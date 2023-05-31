import { Box } from '../Box';
import Stack from './Stack';
import type { StoryObj, Meta, StoryFn } from '@storybook/react';

export default {
  title: 'Components/Layout/Stack',
  component: Stack,
} as Meta<typeof Stack>;

export const Usage: StoryObj<typeof Stack> = {
  render: (args) => (
    <Stack {...args}>
      <Box>Stack</Box>
      <Box>Stack</Box>
      <Box>Stack</Box>
      <Box>Stack</Box>
    </Stack>
  ),
};
