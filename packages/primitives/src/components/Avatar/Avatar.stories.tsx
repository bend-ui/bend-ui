import { Avatar } from './';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Avatar',
  component: Avatar,
} as ComponentMeta<typeof Avatar>;

type Story = ComponentStory<typeof Avatar>;

export const Base: Story = (args) => (
  <Avatar.Root {...args}>Avatar</Avatar.Root>
);
