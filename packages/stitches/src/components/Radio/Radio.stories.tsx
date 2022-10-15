import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Radio } from './';

export default {
  title: 'Forms/Radio',
  component: Radio,
} as ComponentMeta<typeof Radio>;

export const Default: ComponentStory<typeof Radio> = (args) => (
  <Radio {...args}>Remember me</Radio>
);

export const WithDescription = Default.bind({})

WithDescription.args = {
  description: 'Save my login details for next time.'
}
