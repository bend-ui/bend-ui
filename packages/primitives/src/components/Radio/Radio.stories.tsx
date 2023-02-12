import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Radio } from './';

export default {
  title: 'Forms/Radio',
  component: Radio,
} as ComponentMeta<typeof Radio>;

type Story = ComponentStory<typeof Radio>;

export const Base: Story = (args) => {
  return (
    <Radio.Root {...args}>
      <Radio.Control />
      <Radio.Label>Radio</Radio.Label>
    </Radio.Root>
  );
};
