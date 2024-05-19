import { text } from '@particles/styled-system/recipes';
import { Heading } from '.';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Heading> = {
  title: 'Components/Typography/Heading',
  component: Heading,
  args: {
    children:
      "I'm giving them the leads, Phyllis. Yeah, well, the acorn becomes the oak. Whoa!",
  },
};
export default meta;

type Story = StoryObj<typeof Heading>;

/** By default the `Heading` component renders a span that inherit styles from its parent */
export const Base: Story = {};

export const Title: Story = {
  args: text.raw({ variant: 'title' }),
};

export const Body: Story = {
  args: {
    args: text.raw({ variant: 'body' }),
  },
};

export const Polymorphic: Story = {
  args: {
    as: 'h1',
  },
};
