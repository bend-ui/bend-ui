import { Badge } from './';
import type { Meta, StoryObj } from '@storybook/react';

export default {
  component: Badge,
  args: {
    children: 'Badge',
  },
} as Meta<typeof Badge>;

type Story = StoryObj<typeof Badge>;

export const Base: Story = {};

export const Variants = {
  parameters: {
    variants: {
      enable: true,
    },
  },
};
