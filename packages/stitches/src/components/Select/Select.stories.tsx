import Select from './Select';
import type { Meta, StoryFn, StoryObj } from '@storybook/react';

export default {
  title: 'Components/Forms/Select',
  component: Select,
} as Meta<typeof Select>;

export const Default: StoryObj<typeof Select> = {
  render: (args) => (
    <Select {...args}>
      <Select.Option>Option 1</Select.Option>
      <Select.Option>Option 2</Select.Option>
      <Select.Option>Option 3</Select.Option>
      <Select.Option>Option 4</Select.Option>
      <Select.Option>Option 5</Select.Option>
      <Select.Option>Option 6</Select.Option>
    </Select>
  ),

  args: {
    placeholder: 'Select...',
  },
};
