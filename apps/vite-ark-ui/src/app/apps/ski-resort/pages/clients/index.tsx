import { Input } from '@bend-ui/ark-ui';
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
        <div>
          <div>
            <Input placeholder="Search clients by name or email..." />
          </div>
          <div>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Membership Status</th>
                  <th>Last Visit</th>
                </tr>
              </thead>
              <tbody>
                {clients.map((client) => (
                  <tr key={client.id}>
                    <td>{client.name}</td>
                    <td>{client.email}</td>
                    <td>{client.phone}</td>
                    <td>{client.membershipStatus}</td>
                    <td>{client.lastVisit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};
