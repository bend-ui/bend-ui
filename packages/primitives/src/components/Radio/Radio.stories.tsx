import { VisuallyHidden } from '../VisuallyHidden';
import { Radio } from './';
import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'Forms/Radio',
  component: Radio,
} as Meta<typeof Radio>;

type Story = StoryObj<typeof Radio>;

export const Base: Story = {
  render: (args) => (
    <Radio.Root {...args}>
      <Radio.Input />
      <Radio.Label>Radio</Radio.Label>
    </Radio.Root>
  ),
};

export const WithControl: Story = {
  render: (args) => (
    <Radio.Root {...args}>
      <VisuallyHidden>
        <Radio.Input />
      </VisuallyHidden>
      <Radio.Control />
      <Radio.Label>Radio</Radio.Label>
    </Radio.Root>
  ),
};
