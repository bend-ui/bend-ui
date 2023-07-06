import { Badge } from '../Badge';
import { Nav } from './';
import type { Meta, StoryFn, StoryObj } from '@storybook/react';

export default {
  title: 'Components/Nav',
  component: Nav,
} as Meta<typeof Nav>;

export const Default: StoryObj<typeof Nav> = {
  render: (args) => (
    <Nav {...args}>
      <Nav.Link href="#" aria-current="page">
        Item
      </Nav.Link>
      <Nav.Link href="#">Item</Nav.Link>
      <Nav.Link href="#">Item</Nav.Link>
      <Nav.Link href="#">Item</Nav.Link>
    </Nav>
  ),
};

export const WithAddon: StoryObj<typeof Nav> = {
  render: (args) => (
    <Nav {...args}>
      <Nav.Link href="#" aria-current="page">
        Item
      </Nav.Link>
      <Nav.Link href="#" addonEnd={<Badge>3</Badge>}>
        Item
      </Nav.Link>
      <Nav.Link href="#">Item</Nav.Link>
      <Nav.Link href="#">Item</Nav.Link>
    </Nav>
  ),
};
