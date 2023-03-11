import { Switch } from './Switch';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Forms/Switch',
  component: Switch,
} as ComponentMeta<typeof Switch>;

export const Base: ComponentStory<typeof Switch> = (args) => (
  <Switch {...args} />
);
