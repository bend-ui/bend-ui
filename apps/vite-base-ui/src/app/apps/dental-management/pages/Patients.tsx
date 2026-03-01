import { Button, IconButton, Input, Dialog, Tabs } from '@particles/base-ui';
import { Ellipsis, FilterIcon, SearchIcon } from 'lucide-react';
import { data, Patient } from '../data';

export const Patients = () => {
  return (
    <div>
      <div>Patients</div>
      <AddPatientModal />
      <Input icon={<SearchIcon />} placeholder="Search by name, email..." />
      <Button icon={<FilterIcon />}>Filter</Button>

      <table>
        <thead>
          <tr>
            <th>Patient</th>
            <th>Contact</th>
            <th>Status</th>
            <th>Last Visit</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.patients.map((patient) => (
            <tr key={patient.id}>
              <td>{patient.name}</td>
              <td>{patient.email}</td>
              <td>{patient.status}</td>
              <td>{patient.lastVisit}</td>
              <td>
                <IconButton icon={<Ellipsis />}>More</IconButton>
                <PatientProfile patient={patient} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const AddPatientModal = () => {
  return (
    <Dialog>
      <Dialog.Trigger>Add Patient</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Popup>
            <div>Add Patient</div>
            <Input placeholder="Name" />
            <Input placeholder="Email" />
            <Input placeholder="Phone" />
            <Button>Save</Button>
          </Dialog.Popup>
        </Dialog.Positioner>
      </Dialog.Portal>
    </Dialog>
  );
};

interface PatientProfileProps {
  patient: Patient;
}

const PatientProfile = (props: PatientProfileProps) => {
  const { patient } = props;
  return (
    <div>
      Patient Profile
      <div>{patient.name}</div>
      <div>
        <Tabs>
          <Tabs.List>
            <Tabs.Tab value="overview">Overview</Tabs.Tab>
            <Tabs.Tab value="appointments">Appointments</Tabs.Tab>
            <Tabs.Tab value="invoices">Invoices</Tabs.Tab>
            <Tabs.Tab value="notes">Notes</Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value="overview">Overview content</Tabs.Panel>
          <Tabs.Panel value="appointments">Appointments content</Tabs.Panel>
          <Tabs.Panel value="invoices">Invoices content</Tabs.Panel>
          <Tabs.Panel value="notes">Notes content</Tabs.Panel>
        </Tabs>
      </div>
    </div>
  );
};
