import { CheckboxGroup } from './CheckboxGroup';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof CheckboxGroup> = {
  component: CheckboxGroup,
  title: 'CheckboxGroup',
};
export default meta;
type Story = StoryObj<typeof CheckboxGroup>;

export const Base: Story = {
  args: {},
};
