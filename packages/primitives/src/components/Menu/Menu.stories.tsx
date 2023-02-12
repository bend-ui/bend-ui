import { ComponentMeta, ComponentStory } from '@storybook/react';
import clsx from 'clsx';
import { twStyles } from './Menu.styles';
import { Menu } from '.';

export default {
  title: 'Overlays/Menu',
  component: Menu,
} as ComponentMeta<typeof Menu>;

type Story = ComponentStory<typeof Menu>;

export const Base: Story = (args) => (
  <Menu.Root {...args}>
    <Menu.Button>Home</Menu.Button>
    <Menu.List className={clsx(twStyles.list)}>
      <Menu.Item>Home</Menu.Item>
      <Menu.Item>Search</Menu.Item>
      <Menu.Item>Trending</Menu.Item>
      <Menu.Item>Lists</Menu.Item>
    </Menu.List>
  </Menu.Root>
);
