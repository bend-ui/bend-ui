import { expect, within } from '@storybook/test';
import { CheckboxGroup } from './CheckboxGroup';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof CheckboxGroup> = {
  component: CheckboxGroup,
  title: 'CheckboxGroup',
};
export default meta;
type Story = StoryObj<typeof CheckboxGroup>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText(/Welcome to CheckboxGroup!/gi)).toBeTruthy();
  },
};
