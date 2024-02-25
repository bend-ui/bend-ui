import { Checkbox } from './Checkbox';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Base: Story = {};

export const DefaultChecked: Story = {
  args: {
    defaultChecked: true,
  },
};
