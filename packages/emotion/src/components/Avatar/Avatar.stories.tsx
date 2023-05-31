import { Avatar } from '.';
import type { StoryObj, Meta, StoryFn } from '@storybook/react';

export default {
  title: 'Components/Data Display/Avatar',
  component: Avatar,
} as Meta<typeof Avatar>;

export const Base: StoryObj<typeof Avatar> = {
  args: {
    src: 'https://picsum.photos/200',
  },
};
