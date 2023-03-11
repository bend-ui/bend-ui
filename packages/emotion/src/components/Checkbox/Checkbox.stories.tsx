import { Checkbox } from '.';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

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
