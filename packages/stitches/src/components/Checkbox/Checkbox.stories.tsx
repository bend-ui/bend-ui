import { Checkbox } from './';
import type { Meta, StoryFn, StoryObj } from '@storybook/react';

export default {
  title: 'Components/Forms/Checkbox',
  component: Checkbox,
} as Meta<typeof Checkbox>;

export const Default: StoryObj<typeof Checkbox> = {
  render: (args) => <Checkbox {...args}>Remember me</Checkbox>,
};

export const WithDescription = {
  render: Default,

  args: {
    description: 'Save my login details for next time.',
  },
};
