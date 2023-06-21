import { ListBox } from './';
import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'ListBox',
  component: ListBox,
} as Meta<typeof ListBox>;

type Story = StoryObj<typeof ListBox>;

export const Base: Story = {
  render: (args) => <ListBox.Root {...args}>ListBox</ListBox.Root>,
};
