import { Box } from '../Box';
import { Level } from './Level';
import type { Meta, StoryFn, StoryObj } from '@storybook/react';

export default {
  title: 'Layout/Level',
  component: Level,
} as Meta<typeof Level>;

export const Base: StoryObj<typeof Level> = {
  render: (args) => (
    <Level {...args}>
      <Box
        sx={{ width: '50px', height: '50px', backgroundColor: '$primary' }}
      />
      <Box
        sx={{ width: '50px', height: '50px', backgroundColor: '$primary' }}
      />
      <Box
        sx={{ width: '50px', height: '50px', backgroundColor: '$primary' }}
      />
    </Level>
  ),
};
