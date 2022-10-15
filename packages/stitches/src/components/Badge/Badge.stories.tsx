import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Badge } from './';

export default {
  title: 'Components/Badge',
  component: Badge,
} as ComponentMeta<typeof Badge>;

export const Default: ComponentStory<typeof Badge> = (args) => (
  <Badge {...args}>Badge</Badge>
);
