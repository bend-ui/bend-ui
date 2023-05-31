import React from 'react';
import { Box } from './Box';
import type { Meta, StoryFn } from '@storybook/react';

export default {
  component: Box,
  title: 'Layout/Box',
} as Meta<typeof Box>;

const Template: StoryFn<typeof Box> = (args) => <Box {...args}>Box</Box>;

export const Primary = {
  render: Template,
  args: {},
};
