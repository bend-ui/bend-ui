import { Checkbox } from './Checkbox';
import type { Meta, StoryFn } from '@storybook/react';

export default {
  component: Checkbox,
  title: 'Components/Checkbox',
} as Meta<typeof Checkbox>;

export const Primary = {
  args: {},
};

export const DefaultChecked = {
  args: {
    defaultChecked: true,
  },
};
