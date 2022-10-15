import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Pagination } from './Pagination';

export default {
  title: 'Navigation/Pagination',
  component: Pagination,
} as ComponentMeta<typeof Pagination>;

export const Base: ComponentStory<typeof Pagination> = (args) => (
  <Pagination {...args} />
);
