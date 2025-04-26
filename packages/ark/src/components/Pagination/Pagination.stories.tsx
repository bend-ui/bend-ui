import { Pagination } from './';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/Navigation/Pagination',
  component: Pagination,

  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Pagination>;

export default meta;

type Story = StoryObj<typeof Pagination>;

export const Base: Story = {};
