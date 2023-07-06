import { FiBell, FiMenu, FiPlus, FiSearch } from 'react-icons/fi';
import { Avatar } from '../Avatar';
import { Button, IconButton } from '../Button';
import { Flex } from '../Flex';
import { Input } from '../Input';
import { Level } from '../Level';
import { DropdownMenu } from '../Menu';
import { NavBar } from './';
import type { Meta, StoryFn, StoryObj } from '@storybook/react';

export default {
  title: 'Components/NavBar',
  component: NavBar,
} as Meta<typeof NavBar>;

export const Default: StoryObj<typeof NavBar> = {};

export const Simple = () => (
  <Level>
    <Flex>
      <IconButton>
        <FiMenu />
      </IconButton>
      <Flex>Logo</Flex>
      <Input icon={<FiSearch />} placeholder="Search" />
    </Flex>
    <Flex>
      <Button icon={<FiPlus />}>New</Button>
      <IconButton>
        <FiBell />
      </IconButton>
      <DropdownMenu>
        <DropdownMenu.Trigger>
          <Avatar src="https://randomuser.me/api/portraits/women/44.jpg" />
        </DropdownMenu.Trigger>
        <DropdownMenu.List>
          <DropdownMenu.Item>Profile</DropdownMenu.Item>
          <DropdownMenu.Item>Settings</DropdownMenu.Item>
          <DropdownMenu.Divider />
          <DropdownMenu.Item>Logout</DropdownMenu.Item>
        </DropdownMenu.List>
      </DropdownMenu>
    </Flex>
  </Level>
);
