import { Text } from '../Text';
import { Card } from './';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Card> = {
  title: 'Components/Layout/Card',
  component: Card,
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Base: Story = {
  args: {
    children: (
      <>
        <Text as="h2" variant="title">
          Card content
        </Text>
        <Text>Card content</Text>
      </>
    ),
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
      <Card.Section inheritPadding withBorder>
        A Header
      </Card.Section>
      Card content
      <Card.Section inheritPadding withBorder>
        A banner
      </Card.Section>
      <Card.Section inheritPadding withBorder>
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

export const WithCSSProp: Story = {
  render: (args) => (
    <Card {...args} css={{ color: 'primary' }}>
      Card content
    </Card>
  ),
};

export const WithSystemProp: Story = {
  render: (args) => (
    <Card {...args} color="primary">
      Card content
    </Card>
  ),
};
