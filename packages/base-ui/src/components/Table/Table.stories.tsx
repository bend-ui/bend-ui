import { Meta, StoryObj } from '@storybook/react-vite';
import { MoreHorizontalIcon } from 'lucide-react';
import { Badge } from '../Badge';
import { IconButton } from '@bend-ui/react';
import { Table } from './Table';

const meta: Meta<typeof Table> = {
  title: 'Components/Data Display/Table',
  component: Table,
};

export default meta;

type Story = StoryObj<typeof meta>;

const patients = [
  ['Maya Chen', 'Cleaning', 'Checked in', 'success'],
  ['Noah Patel', 'Invoice #1042', 'Open balance', 'warning'],
  ['Iris Wong', 'Ortho consult', 'Needs review', 'danger'],
] as const;

export const StatusCells: Story = {
  render: () => (
    <Table withRowBorder>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Patient</Table.HeaderCell>
          <Table.HeaderCell>Context</Table.HeaderCell>
          <Table.HeaderCell>Status</Table.HeaderCell>
          <Table.HeaderCell />
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {patients.map(([name, context, status, tone]) => (
          <Table.Row key={name}>
            <Table.Cell>{name}</Table.Cell>
            <Table.Cell>{context}</Table.Cell>
            <Table.Cell>
              <Badge tone={tone}>{status}</Badge>
            </Table.Cell>
            <Table.Cell>
              <IconButton icon={<MoreHorizontalIcon />}>Actions</IconButton>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  ),
};

export const DenseSelectableRows: Story = {
  render: () => (
    <Table density="compact" isStriped withRowBorder>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Lift</Table.HeaderCell>
          <Table.HeaderCell>Wait</Table.HeaderCell>
          <Table.HeaderCell>Status</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {[
          ['Summit Express', '4 min', 'Open'],
          ['North Ridge', '0 min', 'Hold'],
          ['Village Gondola', '8 min', 'Open'],
        ].map(([lift, wait, status]) => (
          <Table.Row key={lift} tabIndex={0}>
            <Table.Cell>{lift}</Table.Cell>
            <Table.Cell>{wait}</Table.Cell>
            <Table.Cell>
              <Badge tone={status === 'Open' ? 'success' : 'warning'}>
                {status}
              </Badge>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  ),
};
