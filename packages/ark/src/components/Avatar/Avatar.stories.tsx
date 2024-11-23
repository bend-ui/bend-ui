import { Avatar } from './Avatar';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/Data Display/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Avatar>;

export default meta;

type Story = StoryObj<typeof Avatar>;

export const Base: Story = {
  args: {
    fallback: 'UI',
    src: 'avatar.webp',
  },
};

export const Fallback: Story = {
  args: {
    fallback: 'UI',
    src: '',
  },
};
