import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Checkbox } from './';

export default {
  title: 'Forms/Checkbox',
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

export const Default: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox {...args}>Remember me</Checkbox>
);

export const WithDescription = Default.bind({})

WithDescription.args = {
  description: 'Save my login details for next time.'
}
