import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Switch } from './Switch';

export default {
  title: 'Forms/Switch',
  component: Switch,
} as ComponentMeta<typeof Switch>;

export const Base: ComponentStory<typeof Switch> = (args) => (
  <Switch {...args} />
);
