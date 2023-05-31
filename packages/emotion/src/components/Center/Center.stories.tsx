import { Center } from '.';
import type { StoryObj, Meta, StoryFn } from '@storybook/react';

export default {
  title: 'Components/Layout/Center',
  component: Center,
} as Meta<typeof Center>;

export const Base: StoryObj<typeof Center> = {
  render: (args) => <Center {...args}>Content</Center>,
};
