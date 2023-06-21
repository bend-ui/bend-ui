import { Image } from './';
import type { Meta, StoryFn } from '@storybook/react';

export default {
  title: 'Image',
  component: Image,
} as Meta<typeof Image>;

type Story = StoryFn<typeof Image>;

export const Base: Story = {
  render: (args) => <Image {...args}>Image</Image>,

  args: {
    src: 'https://i.pravatar.cc/300?u=a042581f4e29026704d',
  },
};
