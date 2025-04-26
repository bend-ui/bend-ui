import { NextApiRequest, NextApiResponse } from 'next';

interface Appointment {
  id: number;
  patientId: number;
  doctorId: number;
  date: string;
  time: string;
  status: string;
}

const appointments: Appointment[] = [
  {
    id: 1,
    patientId: 1,
    doctorId: 1,
    date: '2025-02-20',
    time: '10:00 AM',
    status: 'confirmed',
  },
  {
    id: 2,
    patientId: 2,
    doctorId: 1,
    date: '2025-02-21',
    time: '02:00 PM',
    status: 'pending',
  },
  {
    id: 3,
    patientId: 3,
    doctorId: 1,
    date: '2025-02-22',
    time: '03:00 PM',
    status: 'cancelled',
  },
  {
    id: 4,
    patientId: 4,
    doctorId: 1,
    date: '2025-02-23',
    time: '04:00 PM',
    status: 'pending',
  },
  {
    id: 5,
    patientId: 5,
    doctorId: 1,
    date: '2025-02-24',
    time: '05:00 PM',
    status: 'confirmed',
  },
  {
    id: 6,
    patientId: 6,
    doctorId: 1,
    date: '2025-02-25',
    time: '06:00 PM',
    status: 'pending',
  },
  {
    id: 7,
    patientId: 7,
    doctorId: 1,
    date: '2025-02-26',
    time: '07:00 PM',
    status: 'cancelled',
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(appointments);
}
