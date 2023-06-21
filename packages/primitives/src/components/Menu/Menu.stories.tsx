import clsx from 'clsx';
import { twStyles } from './Menu.styles';
import { Menu } from '.';
import type { Meta, StoryFn } from '@storybook/react';

export default {
  title: 'Overlays/Menu',
  component: Menu,
} as Meta<typeof Menu>;

type Story = StoryFn<typeof Menu>;

export const Base: Story = {
  render: (args) => (
    <Menu.Root {...args}>
      <Menu.Button>Home</Menu.Button>
      <Menu.List>
        <Menu.Item>Home</Menu.Item>
        <Menu.Item>Search</Menu.Item>
        <Menu.Item>Trending</Menu.Item>
        <Menu.Item>Lists</Menu.Item>
      </Menu.List>
    </Menu.Root>
  ),
};
