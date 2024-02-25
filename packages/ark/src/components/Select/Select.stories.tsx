import { Select } from './Select';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Select> = {
  component: Select,
};

export default meta;

type Story = StoryObj<typeof Select>;

export const Base: Story = {
  args: {
    items: ['React', 'Vue', 'Angular'],
  },
};
