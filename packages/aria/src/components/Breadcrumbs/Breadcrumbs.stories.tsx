import { within } from '@storybook/test';
import { expect } from '@storybook/test';
import { Breadcrumbs } from './Breadcrumbs';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Breadcrumbs> = {
  component: Breadcrumbs,
  title: 'Breadcrumbs',
};
export default meta;
type Story = StoryObj<typeof Breadcrumbs>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText(/Welcome to Breadcrumbs!/gi)).toBeTruthy();
  },
};
