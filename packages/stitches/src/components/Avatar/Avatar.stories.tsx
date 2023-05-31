import { Avatar } from './Avatar';
import type { StoryObj, Meta, StoryFn } from '@storybook/react';

export default {
  title: 'Components/Avatar',
  component: Avatar,
} as Meta<typeof Avatar>;

export const Default: StoryObj<typeof Avatar> = {
  args: {
    src: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
};
