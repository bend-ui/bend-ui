import React from 'react';
import { Dropdown } from '.';
import type { StoryObj, Meta, StoryFn } from '@storybook/react';

export default {
  title: 'Dropdown',
} as Meta<typeof Dropdown>;

export const Base: StoryObj<typeof Dropdown> = {
  render: (args) => <Dropdown {...args} />,
};
