import { Pagination } from './Pagination';
import type { Meta, StoryFn, StoryObj } from '@storybook/react';

export default {
  title: 'Navigation/Pagination',
  component: Pagination,
} as Meta<typeof Pagination>;

export const Base: StoryObj<typeof Pagination> = {};
