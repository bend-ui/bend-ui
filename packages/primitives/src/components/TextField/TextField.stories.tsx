import { TextField } from '.';
import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'Forms/TextField',
  component: TextField,
} as Meta<typeof TextField>;

type Story = StoryObj<typeof TextField>;

export const Base: Story = {
  render: (args) => (
    <TextField.Root {...args}>
      <TextField.Input />
    </TextField.Root>
  ),
};
