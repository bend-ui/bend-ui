import { expect, within } from '@storybook/test';
import { Input } from './Input';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Input> = {
  component: Input,
  title: 'Input',
};
export default meta;
type Story = StoryObj<typeof Input>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText(/Welcome to Input!/gi)).toBeTruthy();
  },
};
