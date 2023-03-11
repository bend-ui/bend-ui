import React from 'react';
import { TextField } from '.';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Forms/TextField',
  component: TextField,
} as ComponentMeta<typeof TextField>;

type Story = ComponentStory<typeof TextField>;

export const Base: Story = (args) => (
  <TextField.Root {...args}>
    <TextField.Input />
  </TextField.Root>
);
