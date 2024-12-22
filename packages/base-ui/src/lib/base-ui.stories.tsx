import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { BaseUi } from './base-ui';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof BaseUi> = {
  component: BaseUi,
  title: 'BaseUi',
};
export default meta;
type Story = StoryObj<typeof BaseUi>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText(/Welcome to BaseUi!/gi)).toBeTruthy();
  },
};
