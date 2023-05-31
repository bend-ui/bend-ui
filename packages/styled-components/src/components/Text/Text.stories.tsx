import { Text } from './Text';
import type { StoryObj, Meta, StoryFn } from '@storybook/react';

export default {
  title: 'Typography/Text',
  component: Text,
} as Meta<typeof Text>;

export const Base: StoryObj<typeof Text> = {};
