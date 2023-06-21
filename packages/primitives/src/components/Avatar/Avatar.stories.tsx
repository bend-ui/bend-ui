import { Avatar } from './';
import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'Avatar',
  component: Avatar,
} as Meta<typeof Avatar>;

type Story = StoryObj<typeof Avatar>;

export const Base: Story = {
  render: (args) => (
    <Avatar.Root {...args}>
      <Avatar.Image src="https://i.pravatar.cc/300?u=a042581f4e29026704d" />
      <Avatar.Fallback>UI</Avatar.Fallback>
    </Avatar.Root>
  ),
};

export const Tailwind: Story = {
  render: (args) => (
    <Avatar.Root
      className="aspect-square overflow-hidden w-10 h-10 rounded-full"
      {...args}
    >
      <Avatar.Image src="https://i.pravatar.cc/300?u=a042581f4e29026704d" />
      <Avatar.Fallback>UI</Avatar.Fallback>
    </Avatar.Root>
  ),
};
