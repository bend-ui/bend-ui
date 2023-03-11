import { FiEdit, FiShare, FiTool, FiTrash } from 'react-icons/fi';

import { Button } from '../Button';

import { DropdownMenu } from './';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Components/Overlay/Menu',
  component: DropdownMenu,
} as ComponentMeta<typeof DropdownMenu>;

export const Base: ComponentStory<typeof DropdownMenu> = (args) => (
  <DropdownMenu {...args}>
    <DropdownMenu.Trigger>
      <Button>Open</Button>
    </DropdownMenu.Trigger>
    <DropdownMenu.List>
      <DropdownMenu.Item icon={FiTool} onClick={() => alert('Edit')}>
        Edit
      </DropdownMenu.Item>
      <DropdownMenu.Item icon={FiEdit}>Rename</DropdownMenu.Item>
      <DropdownMenu.Item icon={FiShare}>Share</DropdownMenu.Item>
      <DropdownMenu.Item icon={FiTrash}>Delete</DropdownMenu.Item>
      <DropdownMenu.Divider />
      <DropdownMenu.Item icon={FiEdit}>Rename</DropdownMenu.Item>
      <DropdownMenu.Item icon={FiShare}>Share</DropdownMenu.Item>
      <DropdownMenu.Item icon={FiTrash}>Delete</DropdownMenu.Item>
    </DropdownMenu.List>
  </DropdownMenu>
);
