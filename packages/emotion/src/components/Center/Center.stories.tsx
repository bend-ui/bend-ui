import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Center } from '.';

export default {
  title: 'Components/Layout/Center',
  component: Center,
} as ComponentMeta<typeof Center>;

export const Base: ComponentStory<typeof Center> = (args) => (
  <Center {...args}>Content</Center>
);
