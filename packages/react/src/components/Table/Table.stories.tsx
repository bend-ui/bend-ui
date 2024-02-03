import { Table } from './Table';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Table> = {
  title: 'Components/Data/Table',
  component: Table,
};

export default meta;

type Story = StoryObj<typeof Table>;

export const Base: Story = {
  render: () => (
    <Table>
      <Table.Header>
        <Table.Row>
          <Table.Head>Column 1</Table.Head>
          <Table.Head>Column 2</Table.Head>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell>Row 1, Column 1</Table.Cell>
          <Table.Cell>Row 1, Column 2</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Row 2, Column 1</Table.Cell>
          <Table.Cell>Row 2, Column 2</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  ),
};
