import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Badge } from './Badge';

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
