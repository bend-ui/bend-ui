import { Select } from '.';
import type { StoryObj, Meta, StoryFn } from '@storybook/react';

export default {
  title: 'Components/Forms/Select',
  component: Select,
} as Meta<typeof Select>;

export const Usage: StoryObj<typeof Select> = {
  render: (args) => (
    <Select {...args}>
      <Select.Option>Hulk Hogan</Select.Option>
      <Select.Option>Undertaker</Select.Option>
      <Select.Option>Stone Cold Steve Austin</Select.Option>
      <Select.Option>The Rock</Select.Option>
    </Select>
  ),

  args: {
    placeholder: 'Select an option',
  },
};
