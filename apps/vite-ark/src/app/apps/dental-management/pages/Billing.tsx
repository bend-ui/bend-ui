import { Button, Input } from '@particles/ark';
import { PlusIcon, SearchIcon } from 'lucide-react';
import { data } from '../data';
import { PageLayout } from '../components/PageLayout';

export const Billing = () => {
  return (
    <PageLayout>
      <PageLayout.Title>Billing</PageLayout.Title>
      <PageLayout.Content>
        <Button icon={<PlusIcon />}>Create Invoice</Button>
        <div>All / paid / pending / overdue</div>
        <Input icon={<SearchIcon />} placeholder="Search invoice #" />
        <Button>Export</Button>
        <table>
          <thead>
            <tr>
              <th>Invoice ID</th>
              <th>Patient Name</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data.invoices.map((invoice) => (
              <tr key={invoice.id}>
                <td>{invoice.id}</td>
                <td>
                  {data.patients.find((p) => p.id === invoice.patientId)?.name}
                </td>
                <td>{invoice.date}</td>
                <td>${invoice.amount}</td>
                <td>{invoice.status}</td>
                <td>Edit</td>
              </tr>
            ))}
          </tbody>
        </table>
      </PageLayout.Content>
    </PageLayout>
  );
};
