import { Radio } from './';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Forms/Radio',
  component: Radio,
} as ComponentMeta<typeof Radio>;

type Story = ComponentStory<typeof Radio>;

export const Base: Story = (args) => (
  <Radio.Root {...args}>
    <Radio.Control />
    <Radio.Label>Radio</Radio.Label>
  </Radio.Root>
);
