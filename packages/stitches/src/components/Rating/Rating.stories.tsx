import { Rating } from '.';
import type { StoryObj, Meta, StoryFn } from '@storybook/react';

export default {
  title: 'Components/Rating',
  component: Rating,
} as Meta<typeof Rating>;

export const Default: StoryObj<typeof Rating> = {};
