import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { PandaAria } from './panda-aria';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof PandaAria> = {
  component: PandaAria,
  title: 'PandaAria',
};
export default meta;
type Story = StoryObj<typeof PandaAria>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText(/Welcome to PandaAria!/gi)).toBeTruthy();
  },
};
