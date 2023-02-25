import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Avatar } from './';

export default {
  title: 'Avatar',
  component: Avatar,
} as ComponentMeta<typeof Avatar>;

type Story = ComponentStory<typeof Avatar>;

export const Base: Story = (args) => (
  <Avatar.Root {...args}>Avatar</Avatar.Root>
);
