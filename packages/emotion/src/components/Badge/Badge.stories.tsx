import { Badge } from '.';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Components/Data Display/Badge',
  component: Badge,
} as ComponentMeta<typeof Badge>;

export const Base: ComponentStory<typeof Badge> = (args) => (
  <Badge {...args}>Label</Badge>
);
