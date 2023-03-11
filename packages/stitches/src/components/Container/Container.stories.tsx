import { Container } from './';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Layout/Container',
  component: Container,
} as ComponentMeta<typeof Container>;

export const Default: ComponentStory<typeof Container> = (args) => (
  <Container {...args} />
);
