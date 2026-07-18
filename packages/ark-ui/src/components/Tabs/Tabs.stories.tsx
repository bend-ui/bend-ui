import { Tabs } from '.';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  title: 'Tabs',
  component: Tabs,

  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Tabs>;

export default meta;

type Story = StoryObj<typeof Tabs>;

export const Base: Story = {
  render: (args) => <Tabs {...args} />,
};
