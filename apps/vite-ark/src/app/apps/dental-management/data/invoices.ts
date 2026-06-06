import { Invoice } from './types';

export const invoices: Invoice[] = [
  {
    id: 'INV-001',
    patientId: '1',
    patientName: 'Emma Thompson',
    date: '2023-10-15',
    amount: 150.0,
    status: 'Paid',
    items: [{ description: 'Prophylaxis Adult', cost: 150.0 }],
  },
  {
    id: 'INV-002',
    patientId: '2',
    patientName: 'James Rodriguez',
    date: '2023-11-20',
    amount: 85.0,
    status: 'Pending',
    items: [{ description: 'Periodic Oral Eval', cost: 85.0 }],
  },
  {
    id: 'INV-003',
    patientId: '4',
    patientName: 'Robert Johnson',
    date: '2024-01-10',
    amount: 1200.0,
    status: 'Overdue',
    items: [{ description: 'Root Canal Therapy', cost: 1200.0 }],
  },
];
