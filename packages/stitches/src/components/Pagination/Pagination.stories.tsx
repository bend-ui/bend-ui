import { Pagination } from './';
import type { StoryObj, Meta, StoryFn } from '@storybook/react';

export default {
  title: 'Components/Pagination',
  component: Pagination,
} as Meta<typeof Pagination>;

export const Default: StoryObj<typeof Pagination> = {};
