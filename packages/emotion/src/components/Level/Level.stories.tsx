import { Box } from '../';
import Level from './Level';
import type { Meta, StoryFn, StoryObj } from '@storybook/react';

export default {
  title: 'Components/Layout/Level',
  component: Level,
} as Meta<typeof Level>;

export const Base: StoryObj<typeof Level> = {
  render: (args) => (
    <Level {...args}>
      <Box>Left</Box>
      <Box>Right</Box>
    </Level>
  ),
};
