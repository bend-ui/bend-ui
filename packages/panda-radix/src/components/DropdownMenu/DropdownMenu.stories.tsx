import { Button } from '@particles/panda';
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
      <DropdownMenu.Item onSelect={() => {}}>Item 1</DropdownMenu.Item>
      <DropdownMenu.Item onSelect={() => {}}>Item 2</DropdownMenu.Item>
      <DropdownMenu.Item onSelect={() => {}}>Item 3</DropdownMenu.Item>
    </DropdownMenu>
  ),
};
