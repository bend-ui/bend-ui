import { Switch } from './';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Switch',
  component: Switch,
} as ComponentMeta<typeof Switch>;

type Story = ComponentStory<typeof Switch>;

export const Base: Story = (args) => (
  <Switch.Root {...args}>
    <Switch.Input />
    <Switch.Thumb />
  </Switch.Root>
);
