import { Container } from '.';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Components/Layout/Container',
  component: Container,
} as ComponentMeta<typeof Container>;

export const Base: ComponentStory<typeof Container> = (args) => (
  <Container {...args}>Content</Container>
);
