import { ComponentMeta, ComponentStory } from '@storybook/react';
import { TbChartAreaLine, TbHome2, TbStack2 } from 'react-icons/tb';

import { Nav } from '.';

export default {
  title: 'Components/Navigation/Nav',
  component: Nav,
} as ComponentMeta<typeof Nav>;

export const Usage: ComponentStory<typeof Nav> = (args) => (
  <Nav {...args}>
    <Nav.Link aria-current="page">Home</Nav.Link>
    <Nav.Link>Dashboard</Nav.Link>
    <Nav.Link>Project</Nav.Link>
  </Nav>
);

export const Vertical: ComponentStory<typeof Nav> = (args) => (
  <Nav {...args}>
    <Nav.Link aria-current="page">Home</Nav.Link>
    <Nav.Link>Dashboard</Nav.Link>
    <Nav.Link>Project</Nav.Link>
  </Nav>
);

Vertical.args = {
  orientation: 'vertical',
};

export const WithIcons: ComponentStory<typeof Nav> = (args) => (
  <Nav {...args}>
    <Nav.Link aria-current="page" icon={<TbHome2 />}>
      Home
    </Nav.Link>
    <Nav.Link icon={<TbChartAreaLine />}>Dashboard</Nav.Link>
    <Nav.Link icon={<TbStack2 />}>Project</Nav.Link>
  </Nav>
);

export const WithDropdown: ComponentStory<typeof Nav> = (args) => (
  <Nav {...args}>
    <Nav.Link aria-current="page" icon={<TbHome2 />}>
      Home
    </Nav.Link>
    <Nav.Dropdown>
      <Nav.DropdownToggle icon={<TbChartAreaLine />}>
        Dashboard
      </Nav.DropdownToggle>
      <Nav.DropdownItem>Overview</Nav.DropdownItem>
      <Nav.DropdownItem>Notifications</Nav.DropdownItem>
      <Nav.DropdownItem>Analytics</Nav.DropdownItem>
      <Nav.DropdownItem>Reports</Nav.DropdownItem>
    </Nav.Dropdown>
    <Nav.Link icon={<TbStack2 />}>Project</Nav.Link>
  </Nav>
);

export const KitchenSink: ComponentStory<typeof Nav> = (args) => (
  <Nav {...args}>
    <Nav.Link aria-current="page" icon={<TbHome2 />} badge indicator isDropdown>
      Home
    </Nav.Link>
    <Nav.Link indicator>Dashboard</Nav.Link>
    <Nav.Link badge>Project</Nav.Link>
    <Nav.Link isDropdown>Account</Nav.Link>
  </Nav>
);
