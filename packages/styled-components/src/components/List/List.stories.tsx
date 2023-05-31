import { List } from './';
import type { StoryObj, Meta, StoryFn } from '@storybook/react';

export default {
  title: 'Data Display/List',
  component: List,
} as Meta<typeof List>;

export const Base: StoryObj<typeof List> = {
  render: (args) => (
    <List {...args}>
      <List.Item>Item</List.Item>
      <List.Item>Item</List.Item>
      <List.Item>Item</List.Item>
    </List>
  ),
};
