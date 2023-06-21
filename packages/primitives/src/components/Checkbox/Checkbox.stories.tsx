import { useState } from 'react';
import { VisuallyHidden } from '../VisuallyHidden';
import { Checkbox } from './';
import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'Forms/Checkbox',
  component: Checkbox,
} as Meta<typeof Checkbox>;

type Story = StoryObj<typeof Checkbox>;

export const Base: Story = {
  render: (args) => (
    <Checkbox.Root {...args}>
      <Checkbox.Input />
      <Checkbox.Label>Select me</Checkbox.Label>
    </Checkbox.Root>
  ),
};

export const WithControl: Story = {
  render: (args) => (
    <Checkbox.Root {...args}>
      <VisuallyHidden>
        <Checkbox.Input />
      </VisuallyHidden>
      <Checkbox.Control />
      <Checkbox.Label>Select me</Checkbox.Label>
    </Checkbox.Root>
  ),
};

export const Controlled: Story = {
  render: (args) => {
    const [isChecked, setChecked] = useState(false);
    return (
      <>
        <button onClick={() => setChecked(!isChecked)}>Toggle</button>
        <Checkbox.Root
          {...args}
          isChecked={isChecked}
          onCheckedChange={() => setChecked(!isChecked)}
        >
          <Checkbox.Input />
          <Checkbox.Label>Select me</Checkbox.Label>
        </Checkbox.Root>
      </>
    );
  },
};
