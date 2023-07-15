import { Button } from '../Button';
import { Tooltip } from './';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Tooltip> = {
  component: Tooltip,
  parameters: {
    layout: 'centered',
  },
  render: (args) => (
    <Tooltip {...args}>
      <Button>Hover me</Button>
    </Tooltip>
  ),
  args: {
    content: 'The tooltip content',
  },
};

export default meta;

type Story = StoryObj<typeof Tooltip>;

export const Base: Story = {};
