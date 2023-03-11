import { Breadcrumbs } from './Breadcrumbs';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Navigation/Breadcrumbs',
  component: Breadcrumbs,
} as ComponentMeta<typeof Breadcrumbs>;

export const Base: ComponentStory<typeof Breadcrumbs> = (args) => (
  <Breadcrumbs {...args} />
);
