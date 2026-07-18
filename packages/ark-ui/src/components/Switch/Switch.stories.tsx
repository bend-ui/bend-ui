import { Switch } from './Switch';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  title: 'Switch',
  component: Switch,

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
