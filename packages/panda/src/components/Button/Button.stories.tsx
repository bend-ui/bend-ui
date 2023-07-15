import { Button } from './';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Button> = {
  component: Button,
  args: {
    children: 'Button',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Base: Story = {};

export const Secondary: Story = {
  args: {
    palette: 'secondary',
  },
};
