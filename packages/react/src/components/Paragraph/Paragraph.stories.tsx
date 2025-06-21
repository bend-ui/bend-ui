import { text } from '@particles/styled-system/recipes';
import { Paragraph } from '.';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof Paragraph> = {
  title: 'Components/Typography/Paragraph',
  component: Paragraph,
  args: {
    children:
      "I'm giving them the leads, Phyllis. Yeah, well, the acorn becomes the oak. Whoa!",
  },
};
export default meta;

type Story = StoryObj<typeof Paragraph>;

/** By default the `Paragraph` component renders a span that inherit styles from its parent */
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
