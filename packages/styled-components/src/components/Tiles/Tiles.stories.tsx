import React from 'react';
import { Box } from '../Box';
import { Tiles } from './Tiles';
import type { Meta, StoryFn } from '@storybook/react';

export default {
  component: Tiles,
  title: 'Components/Tiles',
} as Meta<typeof Tiles>;

const Template: StoryFn<typeof Tiles> = (args) => (
  <Tiles {...args}>
    <Box color="$neutral50" backgroundColor="$purple500" padding="$md">
      item
    </Box>
    <Box color="$neutral50" backgroundColor="$purple500" padding="$md">
      item
    </Box>
    <Box color="$neutral50" backgroundColor="$purple500" padding="$md">
      item
    </Box>
    <Box color="$neutral50" backgroundColor="$purple500" padding="$md">
      item
    </Box>
    <Box color="$neutral50" backgroundColor="$purple500" padding="$md">
      item
    </Box>
    <Box color="$neutral50" backgroundColor="$purple500" padding="$md">
      item
    </Box>
  </Tiles>
);

export const Primary = {
  render: Template,
  args: {},
};
