import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Select } from '.';

export default {
  title: 'Components/Forms/Select',
  component: Select,
} as ComponentMeta<typeof Select>;

export const Usage: ComponentStory<typeof Select> = (args) => (
  <Select {...args}>
    <Select.Option>Hulk Hogan</Select.Option>
    <Select.Option>Undertaker</Select.Option>
    <Select.Option>Stone Cold Steve Austin</Select.Option>
    <Select.Option>The Rock</Select.Option>
  </Select>
);

Usage.args = {
  placeholder: 'Select an option',
};
