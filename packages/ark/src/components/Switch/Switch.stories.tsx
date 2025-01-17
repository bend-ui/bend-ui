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

type Story = StoryObj<typeof Switch>;

export const Base: Story = {
  render: (args) => <Switch {...args} />,
  args: {
    label: 'Switch',
  },
};
