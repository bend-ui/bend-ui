import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { FiEdit, FiShare, FiTool, FiTrash } from 'react-icons/fi';

import { Button } from '../Button';

import { MenuProps } from './Menu';
import { Menu } from './';

export default {
  title: 'Components/Menu',
  component: Menu,
  subcomponents: {
    'Menu.Trigger': Menu.Trigger,
    'Menu.List': Menu.List,
    'Menu.Item': Menu.Item,
  },
} as ComponentMeta<typeof Menu>;

const Template: ComponentStory<typeof Menu> = (args: MenuProps) => {
  return (
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
};

export const Base = Template.bind({});
Base.args = {};
