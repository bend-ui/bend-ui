import { TbBell } from 'react-icons/tb';
import { IconButton } from './';
import type { StoryObj, Meta, StoryFn } from '@storybook/react';

export default {
  title: 'Components/Actions/IconButton',
  component: IconButton,
  args: {
    icon: <TbBell />,
  },
} as Meta<typeof IconButton>;

export const Base: StoryObj<typeof IconButton> = {};

export const Outline = {
  args: {
    variant: 'outline',
  },
};

export const Danger = {
  args: {
    palette: 'danger',
  },
};

export const Link = {
  args: {
    as: 'a',
    href: '/',
  },
};
