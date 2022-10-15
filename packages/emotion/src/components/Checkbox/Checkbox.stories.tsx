import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Checkbox } from '.';

export default {
  component: Checkbox,
  title: 'Components/Forms/Checkbox',
  argTypes: {
    label: {
      type: 'string',
    },
  },
} as ComponentMeta<typeof Checkbox>;

export const Usage: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox {...args} />
);

Usage.args = {
  label: 'Label',
};
