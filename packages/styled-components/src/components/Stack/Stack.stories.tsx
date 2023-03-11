import { Box } from '../Box';
import { Stack } from './Stack';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Layout/Stack',
  component: Stack,
} as ComponentMeta<typeof Stack>;

export const Base: ComponentStory<typeof Stack> = (args) => (
  <Stack {...args}>
    <Box>Item</Box>
    <Box>Item</Box>
    <Box>Item</Box>
  </Stack>
);
