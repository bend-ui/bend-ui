
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { Ark } from './ark';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Ark> = {
  component: Ark,
  title: 'Ark',
};
export default meta;
type Story = StoryObj<typeof Ark>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText(/Welcome to Ark!/gi)).toBeTruthy();
  },
};
