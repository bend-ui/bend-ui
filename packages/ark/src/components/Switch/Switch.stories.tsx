import { Switch } from './Switch';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/Forms/Switch',
  component: Switch,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Switch>;

export default meta;

type Switch = StoryObj<typeof Switch>;

export const Base: Switch = {
  render: (args) => <Switch {...args} />,
  args: {
    label: 'Switch',
  },
};
