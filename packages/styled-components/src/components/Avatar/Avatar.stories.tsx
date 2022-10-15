import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Avatar } from './Avatar';

export default {
  title: 'Data Display/Avatar',
  component: Avatar,
} as ComponentMeta<typeof Avatar>;

export const Base: ComponentStory<typeof Avatar> = (args) => (
  <Avatar {...args} />
);
