import { Radio } from '.';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

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
