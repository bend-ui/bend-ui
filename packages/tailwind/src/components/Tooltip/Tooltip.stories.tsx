import Button from '../Button/Button';
import { Tooltip } from './';
import type { Meta, StoryObj } from '@storybook/react';

export default {
  component: Tooltip,
} as Meta<typeof Tooltip>;

type Story = StoryObj<typeof Tooltip>;

export const Base: Story = {
  render: (args) => (
    <Tooltip {...args}>
      <Button>Button</Button>
    </Tooltip>
  ),

  args: {
    content: 'Tooltip content',
  },
};
