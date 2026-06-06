import { Text } from '../Text';
import { Card } from './';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof Card> = {
  title: 'Components/Layout/Card',
  component: Card,
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Base: Story = {
  render: (args) => (
    <Card {...args}>
      <Card.Header>
        <Card.Title>Card Title</Card.Title>
        <Card.Description>Card Description</Card.Description>
      </Card.Header>
      <Card.Body>
        <Text>Card Body</Text>
      </Card.Body>
      <Card.Footer>Card Footer</Card.Footer>
    </Card>
  ),
};
