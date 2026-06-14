import { Button } from '@bend-ui/react';
import { Popover } from './Popover';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof Popover> = {
  component: Popover,
};

export default meta;

type Story = StoryObj<typeof Popover>;

export const Base: Story = {
  args: {
    trigger: <Button>Open</Button>,
    children: 'Popover',
  },
};
