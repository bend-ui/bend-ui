import { Select } from './Select';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Forms/Select',
  component: Select,
} as ComponentMeta<typeof Select>;

export const Base: ComponentStory<typeof Select> = (args) => (
  <Select {...args}>
    <option value="">Option 1</option>
    <option value="">Option 2</option>
    <option value="">Option 3</option>
  </Select>
);
