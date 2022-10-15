import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Heading } from './Heading';

export default {
  title: 'Typography/Heading',
  component: Heading,
} as ComponentMeta<typeof Heading>;

export const Base: ComponentStory<typeof Heading> = (args) => (
  <Heading {...args} />
);
