import { Avatar } from './Avatar';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Data Display/Avatar',
  component: Avatar,
} as ComponentMeta<typeof Avatar>;

export const Base: ComponentStory<typeof Avatar> = (args) => (
  <Avatar {...args} />
);
