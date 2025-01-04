import { avatar } from '@particles/styled-system/recipes';
import { Avatar } from './Avatar';
import type { Meta, StoryObj } from '@storybook/react';
const meta = {
  title: 'Components/Data Display/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    size: {
      options: avatar.variantMap.size,
      control: {
        type: 'select',
      },
    },
  },
} satisfies Meta<typeof Avatar>;

export default meta;

type Story = StoryObj<typeof meta>;

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
