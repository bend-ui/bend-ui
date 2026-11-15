import { Pagination } from './';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  title: 'Pagination',
  component: Pagination,

  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Pagination>;

export default meta;

type Story = StoryObj<typeof Pagination>;

export const Base: Story = {
  args: {
    count: 100,
    pageSize: 10,
    prevTrigger: 'Previous Page',
    nextTrigger: 'Next Page',
  },
};
