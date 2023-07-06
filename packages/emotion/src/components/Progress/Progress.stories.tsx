import { Progress } from './';
import type { Meta, StoryFn, StoryObj } from '@storybook/react';

export default {
  title: 'Components/Feedback/Progress',
  component: Progress,
} as Meta<typeof Progress>;

export const Usage: StoryObj<typeof Progress> = {
  args: {
    value: 50,
  },
};
