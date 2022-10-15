import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Box } from '../';
import Level from './Level';

export default {
  title: 'Components/Layout/Level',
  component: Level,
} as ComponentMeta<typeof Level>;

export const Base: ComponentStory<typeof Level> = (args) => (
  <Level {...args}>
    <Box>Left</Box>
    <Box>Right</Box>
  </Level>
);
