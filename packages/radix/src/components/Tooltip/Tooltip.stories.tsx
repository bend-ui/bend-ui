import { Tooltip, TooltipProvider } from '.';
import type { Meta, StoryObj } from '@storybook/react-vite';

export default { component: Tooltip } as Meta<typeof Tooltip>;

type Story = StoryObj<typeof Tooltip>;

export const Base: Story = {
  render: () => (
    <TooltipProvider>
      <Tooltip>
        <Tooltip.Trigger>Hover</Tooltip.Trigger>
        <Tooltip.Content>
          <p>Add to library</p>
        </Tooltip.Content>
      </Tooltip>
    </TooltipProvider>
  ),
};
