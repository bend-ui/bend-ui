import { Badge } from '.';
import type { Meta, StoryFn, StoryObj } from '@storybook/react';

export default {
  title: 'Components/Data Display/Badge',
  component: Badge,
} as Meta<typeof Badge>;

export const Base: StoryObj<typeof Badge> = {
  render: (args) => <Badge {...args}>Label</Badge>,
};
