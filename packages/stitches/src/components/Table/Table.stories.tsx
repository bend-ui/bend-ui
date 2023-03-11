import { Badge } from '../Badge';
import { Table } from '.';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Components/Table',
} as ComponentMeta<typeof Table>;

export const Base: ComponentStory<typeof Table> = (args) => (
  <Table {...args}>
    <Table.Header>
      <Table.Column>Merchant</Table.Column>
      <Table.Column>Amount</Table.Column>
      <Table.Column>Category</Table.Column>
    </Table.Header>
    <Table.Body>
      <Table.Row>
        <Table.Cell>Shopify</Table.Cell>
        <Table.Cell>$12</Table.Cell>
        <Table.Cell>
          <Badge palette="primary">Subscription</Badge>
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Starbucks</Table.Cell>
        <Table.Cell>$5</Table.Cell>
        <Table.Cell>
          <Badge palette="primary">Dining</Badge>
        </Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
);
