import { Button } from './';
import type { StoryObj, Meta, StoryFn } from '@storybook/react';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta<typeof Button>;

export const Base: StoryObj<typeof Button> = {
  render: (args) => <Button {...args}>Button</Button>,
};

export const Outline = {
  render: Base,

  args: {
    variant: 'outline',
  },
};

export const AsComponent = {
  render: Base,

  args: {
    as: 'a',
    href: '/',
  },
};

export const WithOverrides = {
  render: Base,

  args: {
    sx: {
      root: {
        backgroundColor: '$danger',
      },
    },
  },
};
