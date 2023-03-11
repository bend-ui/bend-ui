import { Badge } from './';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  component: Badge,
} as ComponentMeta<typeof Badge>;

type Story = ComponentStory<typeof Badge>;

export const Base: Story = (args) => <Badge {...args}>Badge</Badge>;

export const Variants = Base.bind({});
Variants.parameters = {
  variants: {
    enable: true,
  },
};
