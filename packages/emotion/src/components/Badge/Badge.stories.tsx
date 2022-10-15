import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Badge } from '.';

export default {
  title: 'Components/Data Display/Badge',
  component: Badge,
} as ComponentMeta<typeof Badge>;

export const Base: ComponentStory<typeof Badge> = (args) => (
  <Badge {...args}>Label</Badge>
);
