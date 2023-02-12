import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Checkbox } from './';

export default {
  title: 'Forms/Checkbox',
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

type Story = ComponentStory<typeof Checkbox>;

export const Base: Story = (args) => (
  <Checkbox.Root {...args}>
    <Checkbox.Indicator></Checkbox.Indicator>
    <Checkbox.Label>Select me</Checkbox.Label>
  </Checkbox.Root>
);
