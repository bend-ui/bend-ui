import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Box } from '../Box';
import { Level } from '.';

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
