import { Heading } from './';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Components/Typography/Heading',
  component: Heading,
} as ComponentMeta<typeof Heading>;

export const Default: ComponentStory<typeof Heading> = (args) => (
  <Heading {...args}>Cutting-edge features for advanced analytics</Heading>
);
