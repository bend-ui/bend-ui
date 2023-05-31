import { Radio } from './';
import type { StoryObj, Meta, StoryFn } from '@storybook/react';

export default {
  title: 'Components/Forms/Radio',
  component: Radio,
} as Meta<typeof Radio>;

export const Default: StoryObj<typeof Radio> = {
  render: (args) => <Radio {...args}>Remember me</Radio>,
};

export const WithDescription = {
  render: Default,

  args: {
    description: 'Save my login details for next time.',
  },
};
