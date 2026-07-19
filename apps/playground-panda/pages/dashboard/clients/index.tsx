import { Button, Input } from '@bend-ui/ark-ui';
import { styled } from '@bend-ui/styled-system/jsx';

const TableContainer = styled('div', {
  base: {
    overflowX: 'auto',
  },
});

const ClientsTable = styled('table', {
  base: {
    width: 'full',
    borderCollapse: 'collapse',
  },
});

const TableCaption = styled('caption', {
  base: {
    py: 'sm',
    textAlign: 'left',
    fontWeight: 'semibold',
  },
});

const tableCellStyles = {
  px: 'sm',
  py: 'sm',
  borderBottomWidth: '1px',
  borderBottomStyle: 'solid',
} as const;

const TableHeader = styled('th', {
  base: {
    ...tableCellStyles,
    textAlign: 'left',
  },
});

const TableCell = styled('td', {
  base: tableCellStyles,
});

const Clients = () => (
  <div>
    <Button>Add new client</Button>
    <Input placeholder="Search" />
    <TableContainer>
      <ClientsTable>
        <TableCaption>Clients</TableCaption>
        <thead>
          <tr>
            <TableHeader scope="col">Client</TableHeader>
            <TableHeader scope="col">Location</TableHeader>
            <TableHeader scope="col">Phone</TableHeader>
            <TableHeader scope="col">Email</TableHeader>
          </tr>
        </thead>
        <tbody>
          <tr>
            <TableCell>John Doe</TableCell>
            <TableCell>Los Angeles, CA</TableCell>
            <TableCell>555-555-5555</TableCell>
            <TableCell>johndoe@example.org</TableCell>
          </tr>
          <tr>
            <TableCell>Jane Doe</TableCell>
            <TableCell>Los Angeles, CA</TableCell>
            <TableCell>555-555-5555</TableCell>
            <TableCell>johndoe@example.org</TableCell>
          </tr>
        </tbody>
      </ClientsTable>
    </TableContainer>
  </div>
);

export default Clients;
