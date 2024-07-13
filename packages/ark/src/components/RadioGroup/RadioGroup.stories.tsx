import { RadioGroup } from '.';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof RadioGroup> = {
  component: RadioGroup,
};

export default meta;

type Story = StoryObj<typeof RadioGroup>;

export const Base: Story = {
  args: {
    options: [
      { id: '1', label: 'Option 1', value: '1' },
      { id: '2', label: 'Option 2', value: '2' },
      { id: '3', label: 'Option 3', value: '3' },
    ],
  },
};
