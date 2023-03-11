import { Pagination } from './Pagination';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Navigation/Pagination',
  component: Pagination,
} as ComponentMeta<typeof Pagination>;

export const Base: ComponentStory<typeof Pagination> = (args) => (
  <Pagination {...args} />
);
