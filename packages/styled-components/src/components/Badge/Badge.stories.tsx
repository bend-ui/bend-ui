import { Badge } from './Badge';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Components/Badge',
  component: Badge,
} as ComponentMeta<typeof Badge>;

export const Base: ComponentStory<typeof Badge> = (args) => (
  <Badge {...args}>1</Badge>
);

export const AsComponent = Base.bind({});

AsComponent.args = {
  as: 'a',
  href: '/',
};
