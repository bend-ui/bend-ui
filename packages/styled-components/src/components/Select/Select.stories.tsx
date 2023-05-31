import { Select } from './Select';
import type { StoryObj, Meta, StoryFn } from '@storybook/react';

export default {
  title: 'Forms/Select',
  component: Select,
} as Meta<typeof Select>;

export const Base: StoryObj<typeof Select> = {
  render: (args) => (
    <Select {...args}>
      <option value="">Option 1</option>
      <option value="">Option 2</option>
      <option value="">Option 3</option>
    </Select>
  ),
};
