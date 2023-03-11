import { Checkbox } from './';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Components/Forms/Checkbox',
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

export const Default: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox {...args}>Remember me</Checkbox>
);

export const WithDescription = Default.bind({});

WithDescription.args = {
  description: 'Save my login details for next time.',
};
