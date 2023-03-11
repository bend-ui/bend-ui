import React from 'react';
import { Box } from '../Box';
import { Tiles } from './Tiles';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  component: Tiles,
  title: 'Components/Tiles',
} as ComponentMeta<typeof Tiles>;

const Template: ComponentStory<typeof Tiles> = (args) => (
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

export const Primary = Template.bind({});
Primary.args = {};
