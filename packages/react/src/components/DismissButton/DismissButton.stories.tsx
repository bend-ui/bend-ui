import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import { DismissButton } from './DismissButton';

const meta = {
  component: DismissButton,
  tags: ['ai-generated'],
} satisfies Meta<typeof DismissButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  play: async ({ canvas }) => {
    const button = canvas.getByRole('button', { name: /dismiss/i });
    await expect(button).toHaveAttribute('aria-label', 'Dismiss');
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
  },
};

export const Disabled: Story = {
  args: {
    isDisabled: true,
  },
};
