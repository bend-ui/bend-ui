import React from 'react';
import { TextField } from '.';
import type { Meta, StoryFn } from '@storybook/react';

export default {
  title: 'Forms/TextField',
  component: TextField,
} as Meta<typeof TextField>;

type Story = StoryFn<typeof TextField>;

export const Base: Story = {
  render: (args) => (
    <TextField.Root {...args}>
      <TextField.Input />
    </TextField.Root>
  ),
};
