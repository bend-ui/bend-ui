import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
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

export const Base = {
  args: {},
};

export const Render: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText(/Button/gi)).toBeTruthy();
  },
};
