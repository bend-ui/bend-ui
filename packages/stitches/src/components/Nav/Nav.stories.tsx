import { Badge } from '../Badge';
import { Nav } from './';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Components/Nav',
  component: Nav,
} as ComponentMeta<typeof Nav>;

export const Default: ComponentStory<typeof Nav> = (args) => (
  <Nav {...args}>
    <Nav.Link href="#" aria-current="page">
      Item
    </Nav.Link>
    <Nav.Link href="#">Item</Nav.Link>
    <Nav.Link href="#">Item</Nav.Link>
    <Nav.Link href="#">Item</Nav.Link>
  </Nav>
);

export const WithAddon: ComponentStory<typeof Nav> = (args) => (
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
);
