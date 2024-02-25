import { Avatar } from './Avatar';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Avatar> = {
  component: Avatar,
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const Base: Story = {
  args: {
    fallback: 'Fallback',
    src: 'https://source.unsplash.com/random/64x64',
  },
};
