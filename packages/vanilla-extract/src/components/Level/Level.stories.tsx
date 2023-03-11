import { Box } from '../Box';
import { Level } from '.';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Layout/Level',
  component: Level,
} as ComponentMeta<typeof Level>;

export const Base: ComponentStory<typeof Level> = (args) => (
  <Level {...args}>
    <Box>Content</Box>
    <Box>Content</Box>
  </Level>
);
