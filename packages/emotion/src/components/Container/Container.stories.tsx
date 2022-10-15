import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Container } from '.';

export default {
  title: 'Components/Layout/Container',
  component: Container,
} as ComponentMeta<typeof Container>;

export const Base: ComponentStory<typeof Container> = (args) => (
  <Container {...args}>Content</Container>
);
