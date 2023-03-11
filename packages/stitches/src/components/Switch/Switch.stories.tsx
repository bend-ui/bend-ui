import { Switch } from '.';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Components/Forms/Switch',
  component: Switch,
} as ComponentMeta<typeof Switch>;

export const Default: ComponentStory<typeof Switch> = (args) => (
  <Switch {...args} />
);
