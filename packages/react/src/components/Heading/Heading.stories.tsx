import { text } from '@particles/styled-system/recipes';
import { Heading } from '.';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Stack } from '../Stack';

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
  args: text.raw({ variant: 'body' }),
};

export const Variants: Story = {
  render: (args) => (
    <Stack align="center" gap="md">
      {text.variantMap.variant.map((variant) => (
        <Heading key={variant} {...args} variant={variant} />
      ))}
    </Stack>
  ),
};

export const Polymorphic: Story = {
  args: {
    as: 'h1',
  },
};
