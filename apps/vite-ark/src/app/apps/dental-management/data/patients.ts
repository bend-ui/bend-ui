import { Patient } from './types';

export const patients: Patient[] = [
  {
    id: '1',
    name: 'Emma Thompson',
    dob: '1985-04-12',
    email: 'emma.t@example.com',
    phone: '(555) 123-4567',
    lastVisit: '2023-10-15',
    status: 'Active',
    medicalHistory: ['Penicillin Allergy', 'Hypertension'],
    avatarUrl:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop',
  },
  {
    id: '2',
    name: 'James Rodriguez',
    dob: '1992-08-23',
    email: 'j.rod@example.com',
    phone: '(555) 987-6543',
    lastVisit: '2023-11-20',
    status: 'Active',
    medicalHistory: [],
    avatarUrl:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop',
  },
  {
    id: '3',
    name: 'Sophia Liu',
    dob: '1978-01-30',
    email: 'sophia.liu@example.com',
    phone: '(555) 456-7890',
    lastVisit: '2023-09-05',
    status: 'Inactive',
    medicalHistory: ['Diabetes Type 2'],
    avatarUrl:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop',
  },
  {
    id: '4',
    name: 'Robert Johnson',
    dob: '1965-11-12',
    email: 'bob.j@example.com',
    phone: '(555) 222-3333',
    lastVisit: '2024-01-10',
    status: 'Active',
    medicalHistory: ['Asthma'],
  },
];
