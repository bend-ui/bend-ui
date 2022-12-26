import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Checkbox } from './Checkbox';

export default {
  component: Checkbox,
  title: 'Components/Checkbox',
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};

export const DefaultChecked = Template.bind({});
DefaultChecked.args = {
  defaultChecked: true,
};
