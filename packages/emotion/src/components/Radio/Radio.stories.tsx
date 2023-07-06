import { Radio } from '.';
import type { Meta, StoryFn, StoryObj } from '@storybook/react';

export default {
  component: Radio,
  title: 'Components/Forms/Radio',
  argTypes: {
    label: {
      type: 'string',
    },
  },
} as Meta<typeof Radio>;

export const Usage: StoryObj<typeof Radio> = {
  args: {
    label: 'Label',
  },
};
