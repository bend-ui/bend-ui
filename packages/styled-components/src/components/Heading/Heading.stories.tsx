import { Heading } from './Heading';
import type { StoryObj, Meta, StoryFn } from '@storybook/react';

export default {
  title: 'Typography/Heading',
  component: Heading,
} as Meta<typeof Heading>;

export const Base: StoryObj<typeof Heading> = {};
