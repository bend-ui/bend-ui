import { text } from '@particles/panda-system/recipes';
import { Text } from './';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Text> = {
  title: 'Components/Typography/Text',
  component: Text,
  args: {
    children:
      "I'm giving them the leads, Phyllis. Yeah, well, the acorn becomes the oak. Whoa!",
  },
};
export default meta;

type Story = StoryObj<typeof Text>;

/** By default the `Text` component renders a span that inherit styles from its parent */
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
