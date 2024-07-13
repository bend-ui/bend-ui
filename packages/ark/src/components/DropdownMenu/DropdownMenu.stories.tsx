import { Button } from '../';
import { DropdownMenu } from './DropdownMenu';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof DropdownMenu> = {
  component: DropdownMenu,
};

export default meta;

type Story = StoryObj<typeof DropdownMenu>;

export const Base: Story = {
  render: (args) => <DropdownMenu {...args} />,
};

export const Composed: Story = {
  render: (args) => (
    <DropdownMenu.Root {...args}>
      <DropdownMenu.Trigger asChild>
        <Button>Open menu</Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Positioner>
        <DropdownMenu.Content>
          <DropdownMenu.Item value="search">Search</DropdownMenu.Item>
          <DropdownMenu.Item value="undo">Undo</DropdownMenu.Item>
          <DropdownMenu.Item disabled value="delivery">
            Delivery
          </DropdownMenu.Item>
          <DropdownMenu.Item value="unlink">Unlink</DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Positioner>
    </DropdownMenu.Root>
  ),
};
