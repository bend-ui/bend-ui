import React from 'react';
import { FiEdit, FiShare, FiTool, FiTrash } from 'react-icons/fi';

import { Button } from '../Button';

import { Menu } from './';
import type { MenuProps } from './Menu';
import type { Meta, StoryFn } from '@storybook/react';

export default {
  title: 'Components/Menu',
  component: Menu,
  subcomponents: {
    'Menu.Trigger': Menu.Trigger,
    'Menu.List': Menu.List,
    'Menu.Item': Menu.Item,
  },
} as Meta<typeof Menu>;

const Template: StoryFn<typeof Menu> = (args: MenuProps) => (
  <Menu {...args}>
    <Menu.Trigger>
      <Button>Open</Button>
    </Menu.Trigger>
    <Menu.List>
      <Menu.Item icon={FiTool} onClick={() => alert('Edit')}>
        Edit
      </Menu.Item>
      <Menu.Item icon={FiEdit}>Rename</Menu.Item>
      <Menu.Item icon={FiShare}>Share</Menu.Item>
      <Menu.Item icon={FiTrash}>Delete</Menu.Item>
    </Menu.List>
  </Menu>
);

export const Base = {
  render: Template,
  args: {},
};
