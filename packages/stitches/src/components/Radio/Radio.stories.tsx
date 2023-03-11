import { Radio } from './';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Components/Forms/Radio',
  component: Radio,
} as ComponentMeta<typeof Radio>;

export const Default: ComponentStory<typeof Radio> = (args) => (
  <Radio {...args}>Remember me</Radio>
);

export const WithDescription = Default.bind({});

WithDescription.args = {
  description: 'Save my login details for next time.',
};
