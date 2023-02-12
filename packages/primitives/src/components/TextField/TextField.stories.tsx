import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { TextField } from '.';

export default {
  title: 'Forms/TextField',
  component: TextField,
} as ComponentMeta<typeof TextField>;

type Story = ComponentStory<typeof TextField>;

export const Base: Story = (args) => (
  <TextField.Root {...args}>
    <TextField.Input></TextField.Input>
  </TextField.Root>
);
