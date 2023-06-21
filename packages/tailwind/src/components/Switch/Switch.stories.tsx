import { TbCheck } from 'react-icons/tb';
import { Switch } from '.';
import type { Meta, StoryFn } from '@storybook/react';

export default {
  component: Switch,
} as Meta<typeof Switch>;

type Story = StoryFn<typeof Switch>;

export const Base: Story = {};

export const WithLabel: Story = {
  args: {
    onLabel: 'Toggle option',
  },
};

export const WithLabels: Story = {
  args: {
    onLabel: 'On',
    offLabel: 'Off',
  },
};

export const WithThumbIcon: Story = {
  args: {
    thumbIcon: <TbCheck />,
  },
};
