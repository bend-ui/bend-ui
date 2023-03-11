import { Badge } from '.';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Components/Badge',
  component: Badge,
} as ComponentMeta<typeof Badge>;

type Story = ComponentStory<typeof Badge>;

export const Base: Story = (args) => <Badge {...args}>Default</Badge>;
