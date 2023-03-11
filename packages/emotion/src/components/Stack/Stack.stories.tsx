import { Box } from '../Box';
import Stack from './Stack';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Components/Layout/Stack',
  component: Stack,
} as ComponentMeta<typeof Stack>;

export const Usage: ComponentStory<typeof Stack> = (args) => (
  <Stack {...args}>
    <Box>Stack</Box>
    <Box>Stack</Box>
    <Box>Stack</Box>
    <Box>Stack</Box>
  </Stack>
);
