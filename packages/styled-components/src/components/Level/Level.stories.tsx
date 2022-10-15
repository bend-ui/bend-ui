import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Box } from '../Box';
import { Level } from './Level';

export default {
  title: 'Layout/Level',
  component: Level,
} as ComponentMeta<typeof Level>;

export const Base: ComponentStory<typeof Level> = (args) => (
  <Level {...args}>
    <Box sx={{ width: '50px', height: '50px', backgroundColor: '$primary' }} />
    <Box sx={{ width: '50px', height: '50px', backgroundColor: '$primary' }} />
    <Box sx={{ width: '50px', height: '50px', backgroundColor: '$primary' }} />
  </Level>
);
