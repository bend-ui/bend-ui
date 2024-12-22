import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { Ariakit } from './ariakit';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Ariakit> = {
  component: Ariakit,
  title: 'Ariakit',
};
export default meta;
type Story = StoryObj<typeof Ariakit>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText(/Welcome to Ariakit!/gi)).toBeTruthy();
  },
};
