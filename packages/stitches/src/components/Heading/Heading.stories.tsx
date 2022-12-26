import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Heading } from './';

export default {
  title: 'Components/Typography/Heading',
  component: Heading,
} as ComponentMeta<typeof Heading>;

export const Default: ComponentStory<typeof Heading> = (args) => (
  <Heading {...args}>Cutting-edge features for advanced analytics</Heading>
);
