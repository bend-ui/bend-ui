import { Tabs } from '.';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Tabs> = {
  component: Tabs,
};

export default meta;

type Story = StoryObj<typeof Tabs>;

export const Base: Story = {
  render: (args) => <Tabs {...args} />,
};
