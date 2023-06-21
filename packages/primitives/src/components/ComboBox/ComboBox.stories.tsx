import { ComboBox } from './';
import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'ComboBox',
  component: ComboBox,
} as Meta<typeof ComboBox>;

type Story = StoryObj<typeof ComboBox>;

export const Base: Story = {
  render: (args) => <ComboBox.Root {...args}>ComboBox</ComboBox.Root>,
};
