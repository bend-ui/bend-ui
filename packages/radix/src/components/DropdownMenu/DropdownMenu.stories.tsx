import { Button } from '@particles/react';
import { DropdownMenu } from './DropdownMenu';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof DropdownMenu> = {
  component: DropdownMenu,
};

export default meta;

type Story = StoryObj<typeof DropdownMenu>;

export const Default: Story = {
  render: () => (
    <DropdownMenu trigger={<Button>Open</Button>}>
      <DropdownMenu.Item>Item 1</DropdownMenu.Item>
      <DropdownMenu.Item>Item 2</DropdownMenu.Item>
      <DropdownMenu.Item>Item 3</DropdownMenu.Item>
    </DropdownMenu>
  ),
};
