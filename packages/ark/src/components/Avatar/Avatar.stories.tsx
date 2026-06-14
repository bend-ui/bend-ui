import { avatar } from '@bend-ui/styled-system/recipes';
import { Avatar } from './Avatar';
import type { Meta, StoryObj } from '@storybook/react-vite';
const meta = {
  title: 'Avatar',
  component: Avatar,

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
