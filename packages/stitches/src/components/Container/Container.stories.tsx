import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Container } from './';

export default {
  title: 'Layout/Container',
  component: Container,
} as ComponentMeta<typeof Container>;

export const Default: ComponentStory<typeof Container> = (args) => (
  <Container {...args} />
);
