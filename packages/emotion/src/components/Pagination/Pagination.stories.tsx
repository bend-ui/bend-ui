import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Pagination } from '.';

export default {
  title: 'Components/Navigation/Pagination',
  component: Pagination,
} as ComponentMeta<typeof Pagination>;

export const Usage: ComponentStory<typeof Pagination> = (args) => (
  <Pagination {...args} />
);
