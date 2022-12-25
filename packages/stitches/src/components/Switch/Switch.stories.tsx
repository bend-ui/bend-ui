import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Switch } from '.';

export default {
  title: 'Components/Forms/Switch',
  component: Switch,
} as ComponentMeta<typeof Switch>;

export const Default: ComponentStory<typeof Switch> = (args) => (
  <Switch {...args} />
);
