import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Box } from './Box';

export default {
  title: 'Layout/Box',
  component: Box,
} as ComponentMeta<typeof Box>;

export const Base: ComponentStory<typeof Box> = (args) => (
  <Box {...args}>Box</Box>
);

Base.args = {
  sx: {
    backgroundColor: '$blue100',
    padding: '$md',
  },
};
