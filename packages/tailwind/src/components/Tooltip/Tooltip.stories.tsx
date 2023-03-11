import Button from '../Button/Button';
import { Tooltip } from './';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Tooltip',
  component: Tooltip,
} as ComponentMeta<typeof Tooltip>;

type Story = ComponentStory<typeof Tooltip>;

export const Base: Story = (args) => (
  <Tooltip {...args}>
    <Button>Button</Button>
  </Tooltip>
);

Base.args = {
  content: 'Tooltip content',
};
