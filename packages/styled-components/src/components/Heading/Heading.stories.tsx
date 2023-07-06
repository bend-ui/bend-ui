import { Heading } from './Heading';
import type { Meta, StoryFn, StoryObj } from '@storybook/react';

export default {
  title: 'Typography/Heading',
  component: Heading,
} as Meta<typeof Heading>;

export const Base: StoryObj<typeof Heading> = {};
