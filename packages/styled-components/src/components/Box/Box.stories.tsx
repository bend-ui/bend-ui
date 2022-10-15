import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Box } from './Box';

export default {
  component: Box,
  title: 'Layout/Box',
} as ComponentMeta<typeof Box>;

const Template: ComponentStory<typeof Box> = (args) => <Box {...args}>Box</Box>;

export const Primary = Template.bind({});
Primary.args = {};
