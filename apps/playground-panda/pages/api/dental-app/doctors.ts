import { NextApiRequest, NextApiResponse } from 'next';

interface Doctor {
  id: number;
  name: string;
  specialty: string;
}

const doctors: Doctor[] = [
  { id: 1, name: 'Dr. Emily White', specialty: 'Dentist' },
  { id: 2, name: 'Dr. John Doe', specialty: 'Dentist' },
  { id: 3, name: 'Dr. Jane Smith', specialty: 'Dentist' },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(doctors);
}
