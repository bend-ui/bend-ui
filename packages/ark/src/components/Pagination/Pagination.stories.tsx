import { Pagination } from './';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Pagination> = {
  component: Pagination,
};

export default meta;

type Story = StoryObj<typeof Pagination>;

export const Base: Story = {};
