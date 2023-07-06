import { Heading } from './';
import type { Meta, StoryFn, StoryObj } from '@storybook/react';

export default {
  title: 'Components/Typography/Heading',
  component: Heading,
} as Meta<typeof Heading>;

export const Default: StoryObj<typeof Heading> = {
  render: (args) => (
    <Heading {...args}>Cutting-edge features for advanced analytics</Heading>
  ),
};
