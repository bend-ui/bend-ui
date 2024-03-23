import { Checkbox } from './Checkbox';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
  title: 'Checkbox',
};
export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Base: Story = {
  args: {},
};
