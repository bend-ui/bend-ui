import { FormControl } from './';
import type { Meta, StoryFn } from '@storybook/react';

export default {
  title: 'Forms/FormControl',
  component: FormControl,
} as Meta<typeof FormControl>;

type Story = StoryFn<typeof FormControl>;

export const Base: Story = {
  render: (args) => (
    <FormControl.Root {...args}>
      <label htmlFor="emailField">Email address</label>
      <input type="text" name="" id="emailField" />
      <div>Help text</div>
      <div>Error message</div>
    </FormControl.Root>
  ),
};
