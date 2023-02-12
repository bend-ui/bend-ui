import { ComponentMeta, ComponentStory } from '@storybook/react';
import Tooltip from './Tooltip';
import { useTooltip } from './useTooltip';

export default {
  title: 'Components/Tooltip',
  parameters: {
    layout: 'centered',
  },
} as ComponentMeta<typeof Tooltip>;

type Story = ComponentStory<typeof Tooltip>;

export const Hook: Story = (args) => {
  const { isOpen, getTriggerProps, getTooltipProps } = useTooltip(args);
  return (
    <>
      <button {...getTriggerProps()}>Hover me</button>
      {isOpen && (
        <span data-component="tooltip" {...getTooltipProps()}>
          Tooltip content
        </span>
      )}
    </>
  );
};
