import { FormControl } from './';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Forms/FormControl',
  component: FormControl,
} as ComponentMeta<typeof FormControl>;

type Story = ComponentStory<typeof FormControl>;

export const Base: Story = (args) => (
  <FormControl.Root {...args}>
    <label htmlFor="emailField">Email address</label>
    <input type="text" name="" id="emailField" />
    <div>Help text</div>
    <div>Error message</div>
  </FormControl.Root>
);
