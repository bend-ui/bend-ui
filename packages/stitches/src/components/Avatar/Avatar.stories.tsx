import { Avatar } from './Avatar';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Components/Avatar',
  component: Avatar,
} as ComponentMeta<typeof Avatar>;

export const Default: ComponentStory<typeof Avatar> = (args) => (
  <Avatar {...args} />
);

Default.args = {
  src: 'https://randomuser.me/api/portraits/women/44.jpg',
};
