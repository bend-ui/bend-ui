import { Badge } from './';
import type { Meta, StoryFn, StoryObj } from '@storybook/react';

export default {
  title: 'Components/Badge',
  component: Badge,
} as Meta<typeof Badge>;

export const Default: StoryObj<typeof Badge> = {
  render: (args) => <Badge {...args}>Badge</Badge>,
};
