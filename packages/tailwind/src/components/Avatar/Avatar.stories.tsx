import { Avatar } from './';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Avatar> = { component: Avatar };

export default meta;

type Story = StoryObj<typeof Avatar>;

export const Base: Story = {
  args: {
    src: 'https://i.pravatar.cc/300?u=a042581f4e29026704d',
  },
};

export const Variants: Story = {
  parameters: {
    variants: {
      enable: true,
    },
  },
};
