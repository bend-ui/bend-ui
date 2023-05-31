import { Pagination } from './Pagination';
import type { StoryObj, Meta, StoryFn } from '@storybook/react';

export default {
  title: 'Navigation/Pagination',
  component: Pagination,
} as Meta<typeof Pagination>;

export const Base: StoryObj<typeof Pagination> = {};
