import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Breadcrumbs } from './Breadcrumbs';

export default {
  title: 'Navigation/Breadcrumbs',
  component: Breadcrumbs,
} as ComponentMeta<typeof Breadcrumbs>;

export const Base: ComponentStory<typeof Breadcrumbs> = (args) => (
  <Breadcrumbs {...args} />
);
