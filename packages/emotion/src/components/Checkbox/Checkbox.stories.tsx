import { Checkbox } from '.';
import type { Meta, StoryFn, StoryObj } from '@storybook/react';

export default {
  component: Checkbox,
  title: 'Components/Forms/Checkbox',
  argTypes: {
    label: {
      type: 'string',
    },
  },
} as Meta<typeof Checkbox>;

export const Usage: StoryObj<typeof Checkbox> = {
  args: {
    label: 'Label',
  },
};
