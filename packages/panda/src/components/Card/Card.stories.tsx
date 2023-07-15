import { Card } from './';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Card> = {
  component: Card,
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Base: Story = {
  args: {
    children: 'A card component',
  },
};

export const WithSection: Story = {
  render: (args) => (
    <Card {...args}>
      <Card.Section>A Header</Card.Section>
      Card content
      <Card.Section>A banner</Card.Section>
      <Card.Section>A footer</Card.Section>
    </Card>
  ),
};

export const WithSectionBorder: Story = {
  render: (args) => (
    <Card {...args}>
      <Card.Section withBorder>A Header</Card.Section>
      Card content
      <Card.Section withBorder>A banner</Card.Section>
      <Card.Section withBorder>A footer</Card.Section>
    </Card>
  ),
};

export const WithSectionInheritPadding: Story = {
  render: (args) => (
    <Card {...args}>
      <Card.Section withBorder inheritPadding>
        A Header
      </Card.Section>
      Card content
      <Card.Section withBorder inheritPadding>
        A banner
      </Card.Section>
      <Card.Section withBorder inheritPadding>
        A footer
      </Card.Section>
    </Card>
  ),
};

export const WithSectionHeader: Story = {
  render: (args) => (
    <Card {...args}>
      <Card.Header>A Header</Card.Header>
      <div>Card content</div>
    </Card>
  ),
};

export const WithSectionFooter: Story = {
  render: (args) => (
    <Card {...args}>
      Card content
      <Card.Footer>A Footer</Card.Footer>
    </Card>
  ),
};
