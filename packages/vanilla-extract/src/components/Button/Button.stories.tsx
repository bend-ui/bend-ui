import { Button } from '.';
import type { Meta, StoryObj } from '@storybook/react';

export default {
  component: Button,
  title: 'Button',
  args: {
    children: 'Button',
  },
} as Meta<typeof Button>;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {},
};
