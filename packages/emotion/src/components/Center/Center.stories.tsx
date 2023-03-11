import { Center } from '.';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Components/Layout/Center',
  component: Center,
} as ComponentMeta<typeof Center>;

export const Base: ComponentStory<typeof Center> = (args) => (
  <Center {...args}>Content</Center>
);
