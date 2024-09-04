import { Avatar } from './Avatar';
import type { Meta, StoryObj } from '@storybook/react';

export default {
  component: Avatar,
} satisfies Meta<typeof Avatar>;

type Story = StoryObj<typeof Avatar>;

export const Base: Story = {
  args: {
    fallback: 'UI',
    src: 'https://i.pravatar.cc/64',
  },
};

export const Fallback: Story = {
  args: {
    fallback: 'UI',
    src: '',
  },
};
