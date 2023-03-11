import { Pagination } from '.';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Components/Navigation/Pagination',
  component: Pagination,
} as ComponentMeta<typeof Pagination>;

export const Usage: ComponentStory<typeof Pagination> = (args) => (
  <Pagination {...args} />
);
