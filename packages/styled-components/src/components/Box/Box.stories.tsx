import React from 'react';
import { Box } from './Box';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  component: Box,
  title: 'Layout/Box',
} as ComponentMeta<typeof Box>;

const Template: ComponentStory<typeof Box> = (args) => <Box {...args}>Box</Box>;

export const Primary = Template.bind({});
Primary.args = {};
