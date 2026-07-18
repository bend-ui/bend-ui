import { Card, Table, Input } from '@bend-ui/ark-ui';
import { PageHeader } from '../../components/PageHeader';
import { PageWrapper } from '../../components/PageWrapper';
import { clients } from '../../data';

export const Clients = () => {
  return (
    <PageWrapper>
      <PageHeader>
        <PageHeader.Title>Clients</PageHeader.Title>
        <PageHeader.Subtitle>
          List of clients currently at the resort.
        </PageHeader.Subtitle>
        <PageHeader.Actions>
          <button>Add Client</button>
        </PageHeader.Actions>
      </PageHeader>
      <div>
        <Card>
          <Card.Section>
            <Input placeholder="Search clients by name or email..." />
          </Card.Section>
          <Card.Section>
            <Table>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Name</Table.HeaderCell>
                  <Table.HeaderCell>Email</Table.HeaderCell>
                  <Table.HeaderCell>Phone</Table.HeaderCell>
                  <Table.HeaderCell>Membership Status</Table.HeaderCell>
                  <Table.HeaderCell>Last Visit</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {clients.map((client) => (
                  <Table.Row key={client.id}>
                    <Table.Cell>{client.name}</Table.Cell>
                    <Table.Cell>{client.email}</Table.Cell>
                    <Table.Cell>{client.phone}</Table.Cell>
                    <Table.Cell>{client.membershipStatus}</Table.Cell>
                    <Table.Cell>{client.lastVisit}</Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>
          </Card.Section>
        </Card>
      </div>
    </PageWrapper>
  );
};
