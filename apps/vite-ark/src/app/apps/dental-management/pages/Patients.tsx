import { Button, IconButton, Input, Dialog, Tabs } from '@particles/ark';
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
      <Dialog.Popup
        title="Add New Patient"
        description="Enter patient details below"
        closeTrigger="Close"
      >
        <Input placeholder="Name" />
        <Input placeholder="Email" />
        <Input placeholder="Phone" />
        <Button>Save</Button>
      </Dialog.Popup>
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
            <Tabs.Trigger value="overview">Overview</Tabs.Trigger>
            <Tabs.Trigger value="appointments">Appointments</Tabs.Trigger>
            <Tabs.Trigger value="invoices">Invoices</Tabs.Trigger>
            <Tabs.Trigger value="notes">Notes</Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value="overview">Overview content</Tabs.Content>
          <Tabs.Content value="appointments">Appointments content</Tabs.Content>
          <Tabs.Content value="invoices">Invoices content</Tabs.Content>
          <Tabs.Content value="notes">Notes content</Tabs.Content>
        </Tabs>
      </div>
    </div>
  );
};
