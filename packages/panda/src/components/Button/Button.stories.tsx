import { Button } from './';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Button> = {
  component: Button,
  args: {
    children: 'Button',
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

/** The default button styles */
export const Base: Story = {};

/** Secondary styles for the button */
export const Secondary: Story = {
  args: {
    palette: 'secondary',
  },
};

export const Polymorphic: Story = {
  args: {
    as: 'a',
  },
};
