import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Radio } from '.';

export default {
  component: Radio,
  title: 'Components/Forms/Radio',
  argTypes: {
    label: {
      type: 'string',
    },
  },
} as ComponentMeta<typeof Radio>;

export const Usage: ComponentStory<typeof Radio> = (args) => (
  <Radio {...args} />
);

Usage.args = {
  label: 'Label',
};
