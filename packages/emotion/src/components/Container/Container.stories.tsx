import { Container } from '.';
import type { StoryObj, Meta, StoryFn } from '@storybook/react';

export default {
  title: 'Components/Layout/Container',
  component: Container,
} as Meta<typeof Container>;

export const Base: StoryObj<typeof Container> = {
  render: (args) => <Container {...args}>Content</Container>,
};
