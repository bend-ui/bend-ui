import { Button, Input, Table } from '@particles/ark';

const Clients = () => (
  <div>
    <Button>Add new client</Button>
    <Input placeholder="Search" />
    <Table>
      <Table.Header>
        <Table.Row>
          <Table.Head>Client</Table.Head>
          <Table.Head>Location</Table.Head>
          <Table.Head>Phone</Table.Head>
          <Table.Head>Email</Table.Head>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell>John Doe</Table.Cell>
          <Table.Cell>Los Angeles, CA</Table.Cell>
          <Table.Cell>555-555-5555</Table.Cell>
          <Table.Cell>johndoe@example.org</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Jane Doe</Table.Cell>
          <Table.Cell>Los Angeles, CA</Table.Cell>
          <Table.Cell>555-555-5555</Table.Cell>
          <Table.Cell>johndoe@example.org</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  </div>
);

export default Clients;
