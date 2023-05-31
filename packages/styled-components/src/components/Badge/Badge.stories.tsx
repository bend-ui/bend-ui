import { Badge } from './Badge';
import type { StoryObj, Meta, StoryFn } from '@storybook/react';

export default {
  title: 'Components/Badge',
  component: Badge,
} as Meta<typeof Badge>;

export const Base: StoryObj<typeof Badge> = {
  render: (args) => <Badge {...args}>1</Badge>,
};

export const AsComponent = {
  render: Base,

  args: {
    as: 'a',
    href: '/',
  },
};
