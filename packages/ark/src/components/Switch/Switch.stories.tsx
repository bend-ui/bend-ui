import { Switch } from './Switch';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Switch> = {
  component: Switch,
};

export default meta;

type Switch = StoryObj<typeof Switch>;

export const Base: Switch = {
  render: (args) => <Switch {...args} />,
  args: {
    label: 'Switch',
  },
};
