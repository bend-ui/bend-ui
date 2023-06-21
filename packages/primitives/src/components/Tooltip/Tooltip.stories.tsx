import Tooltip from './Tooltip';
import { useTooltip } from './useTooltip';
import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'Components/Tooltip',
  parameters: {
    layout: 'centered',
  },
} as Meta<typeof Tooltip>;

type Story = StoryObj<typeof Tooltip>;

export const Primitive: Story = {
  render: (args) => (
    <Tooltip.Root {...args}>
      <Tooltip.Trigger>
        <button>Hover me</button>
      </Tooltip.Trigger>
      <Tooltip.Content>The tooltip</Tooltip.Content>
    </Tooltip.Root>
  ),
};

export const WithArrow: Story = {
  render: (args) => (
    <Tooltip.Root {...args}>
      <Tooltip.Trigger>
        <button>Hover me</button>
      </Tooltip.Trigger>
      <Tooltip.Content>
        The tooltip
        <Tooltip.Arrow />
      </Tooltip.Content>
    </Tooltip.Root>
  ),
};

export const Hook: Story = {
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { isOpen, getTriggerProps, getTooltipProps } = useTooltip(args);
    return (
      <>
        <button {...getTriggerProps()}>Hover me</button>
        {isOpen && <span {...getTooltipProps()}>Tooltip content</span>}
      </>
    );
  },
};
