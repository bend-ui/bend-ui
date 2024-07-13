import { Avatar } from './Avatar';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Avatar> = {
  component: Avatar,
};

export default meta;

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
