import { Select } from './Select';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Select> = {
  component: Select,
};

export default meta;

type Story = StoryObj<typeof Select>;

export const Base: Story = {
  render: (args) => <Select {...args} />,
  args: {
    items: ['React', 'Vue', 'Angular'],
  },
};
