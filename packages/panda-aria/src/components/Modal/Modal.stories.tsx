
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { Modal } from './Modal';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Modal> = {
  component: Modal,
  title: 'Modal',
};
export default meta;
type Story = StoryObj<typeof Modal>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText(/Welcome to Modal!/gi)).toBeTruthy();
  },
};
