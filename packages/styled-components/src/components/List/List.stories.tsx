import { List } from './';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Data Display/List',
  component: List,
} as ComponentMeta<typeof List>;

export const Base: ComponentStory<typeof List> = (args) => (
  <List {...args}>
    <List.Item>Item</List.Item>
    <List.Item>Item</List.Item>
    <List.Item>Item</List.Item>
  </List>
);
