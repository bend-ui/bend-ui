import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import { Box } from './Box';

const meta = {
  component: Box,
  tags: ['ai-generated'],
  args: {
    children: 'Box content',
    p: 'md',
    bg: 'bg.surface',
    rounded: 'md',
  },
} satisfies Meta<typeof Box>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  play: async ({ canvas }) => {
    await expect(canvas.getByText('Box content')).toBeVisible();
  },
};

export const WithPadding: Story = {
  args: {
    children: 'Padded box',
    p: 'xl',
  },
};

export const WithBorder: Story = {
  args: {
    children: 'Bordered box',
    border: '1px solid',
    borderColor: 'stroke.default',
    p: 'md',
  },
};
