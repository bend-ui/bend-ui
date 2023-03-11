import Tooltip from './Tooltip';
import { useTooltip } from './useTooltip';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Components/Tooltip',
  parameters: {
    layout: 'centered',
  },
} as ComponentMeta<typeof Tooltip>;

type Story = ComponentStory<typeof Tooltip>;

export const Primitive: Story = (args) => (
  <Tooltip.Root {...args}>
    <button>Hover me</button>
  </Tooltip.Root>
);

Primitive.args = {
  content: 'Tooltip content',
};

export const Hook: Story = (args) => {
  const { isOpen, getTriggerProps, getTooltipProps } = useTooltip(args);
  return (
    <>
      <button {...getTriggerProps()}>Hover me</button>
      {isOpen && <span {...getTooltipProps()}>Tooltip content</span>}
    </>
  );
};
