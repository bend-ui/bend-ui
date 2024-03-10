import { Button } from '../';
import { DropdownMenu } from './DropdownMenu';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof DropdownMenu> = {
  component: DropdownMenu,
};

export default meta;

type Story = StoryObj<typeof DropdownMenu>;

export const Base: Story = {};

export const Composed: Story = {
  render: (args) => (
    <DropdownMenu {...args}>
      <DropdownMenu.Trigger asChild>
        <Button>Open menu</Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Positioner>
        <DropdownMenu.Content>
          <DropdownMenu.Item id="search">Search</DropdownMenu.Item>
          <DropdownMenu.Item id="undo">Undo</DropdownMenu.Item>
          <DropdownMenu.Item disabled id="delivery">
            Delivery
          </DropdownMenu.Item>
          <DropdownMenu.Item id="unlink">Unlink</DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Positioner>
    </DropdownMenu>
  ),
};
