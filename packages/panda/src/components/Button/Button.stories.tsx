import { button } from '@particles/panda-system/recipes';
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

/** Primary styles for the button */
export const Primary: Story = {
  args: button.raw({ palette: 'primary' }),
};

export const Polymorphic: Story = {
  args: {
    as: 'a',
  },
};
