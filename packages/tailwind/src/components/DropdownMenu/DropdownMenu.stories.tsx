import { DropdownMenu } from './';
import type { Meta, StoryObj } from '@storybook/react';

export default { component: DropdownMenu } as Meta<typeof DropdownMenu>;

type Story = StoryObj<typeof DropdownMenu>;

export const Base: Story = {
  render: (args) => (
    <DropdownMenu {...args}>
      <DropdownMenu.Target>Menu</DropdownMenu.Target>
      <DropdownMenu.Menu>
        <DropdownMenu.MenuItem>My profile</DropdownMenu.MenuItem>
        <DropdownMenu.MenuItem>My notifications</DropdownMenu.MenuItem>
        <DropdownMenu.MenuItem>My settings</DropdownMenu.MenuItem>
        <hr />
        <DropdownMenu.MenuItem>Logout</DropdownMenu.MenuItem>
      </DropdownMenu.Menu>
    </DropdownMenu>
  ),
};
