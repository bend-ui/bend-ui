import { Heading } from './Heading';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Typography/Heading',
  component: Heading,
} as ComponentMeta<typeof Heading>;

export const Base: ComponentStory<typeof Heading> = (args) => (
  <Heading {...args} />
);
