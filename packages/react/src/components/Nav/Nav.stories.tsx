import { BookIcon, HomeIcon, PhoneIcon } from 'lucide-react';
import { Nav } from '.';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Nav> = {
  title: 'Components/Navigation/Nav',
  component: Nav,
};

export default meta;

type Story = StoryObj<typeof Nav>;

export const Base: Story = {
  render: (args) => (
    <Nav {...args}>
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link aria-current="page" href="#about">
        About
      </Nav.Link>
      <Nav.Link href="#contact">Contact</Nav.Link>
    </Nav>
  ),
};

export const Vertical: Story = {
  ...Base,
  args: {
    direction: 'vertical',
  },
};

export const WithIcons: Story = {
  render: (args) => (
    <Nav {...args}>
      <Nav.Link href="#home" icon={<HomeIcon />}>
        Home
      </Nav.Link>
      <Nav.Link aria-current="page" href="#about" icon={<BookIcon />}>
        About
      </Nav.Link>
      <Nav.Link href="#contact" icon={<PhoneIcon />}>
        Contact
      </Nav.Link>
    </Nav>
  ),
};
