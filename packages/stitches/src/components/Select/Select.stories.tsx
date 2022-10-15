import { ComponentMeta, ComponentStory } from '@storybook/react';
import Select from './Select';

export default {
  title: 'Forms/Select',
  component: Select,
} as ComponentMeta<typeof Select>;

export const Default: ComponentStory<typeof Select> = (args) => (
  <Select {...args}>
    <Select.Option>Option 1</Select.Option>
    <Select.Option>Option 2</Select.Option>
    <Select.Option>Option 3</Select.Option>
    <Select.Option>Option 4</Select.Option>
    <Select.Option>Option 5</Select.Option>
    <Select.Option>Option 6</Select.Option>
  </Select>
);

Default.args = {
  placeholder: 'Select...',
};
