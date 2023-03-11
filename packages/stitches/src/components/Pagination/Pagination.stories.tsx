import { Pagination } from './';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Components/Pagination',
  component: Pagination,
} as ComponentMeta<typeof Pagination>;

export const Default: ComponentStory<typeof Pagination> = (args) => (
  <Pagination {...args} />
);
