import { Menu } from '.';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Components/Navigation/Menu',
  component: Menu,
} as ComponentMeta<typeof Menu>;

export const Base: ComponentStory<typeof Menu> = () => (
  <Menu>
    <Menu.Button>Menu</Menu.Button>
    <Menu.Dropdown>
      <Menu.Heading>Heading</Menu.Heading>
      <Menu.Item>Item</Menu.Item>
      <Menu.Item>Item</Menu.Item>
      <Menu.Divider />
      <Menu.Item>Item</Menu.Item>
      <Menu.Item>Item</Menu.Item>
      <Menu.Item>Item</Menu.Item>
      <Menu.Item>Item</Menu.Item>
      <Menu.Item>Item</Menu.Item>
    </Menu.Dropdown>
  </Menu>
);
