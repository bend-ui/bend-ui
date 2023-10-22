import { button } from '@particles/panda-system/recipes';
import { css } from '@particles/panda-system/css';
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

export const WithCSSProp: Story = {
  args: {
    css: css.raw({
      color: 'red.500',
    }),
  },
};

export const WithSystemProp: Story = {
  render: (args) => <Button {...args} color="primary" />,
};
