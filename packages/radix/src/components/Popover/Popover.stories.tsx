import { Button } from '@particles/panda';
import { Popover } from './Popover';
import type { Meta, StoryObj } from '@storybook/react';

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
