import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Pagination } from './';

export default {
  title: 'Components/Pagination',
  component: Pagination,
} as ComponentMeta<typeof Pagination>;

export const Default: ComponentStory<typeof Pagination> = (args) => (
  <Pagination {...args} />
);
