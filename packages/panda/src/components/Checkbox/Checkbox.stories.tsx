import { Checkbox } from './';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
  args: {
    children: 'Checkbox',
  },
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Base: Story = {};
