import { Badge } from '.';
import type { Meta, StoryFn } from '@storybook/react';

export default {
  title: 'Components/Badge',
  component: Badge,
} as Meta<typeof Badge>;

type Story = StoryFn<typeof Badge>;

export const Base: Story = {
  render: (args) => <Badge {...args}>Default</Badge>,
};
