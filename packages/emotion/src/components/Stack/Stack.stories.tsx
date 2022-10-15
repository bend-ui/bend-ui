import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Box } from '../Box';
import Stack from './Stack';

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
