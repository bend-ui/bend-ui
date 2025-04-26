import { NextApiRequest, NextApiResponse } from 'next';

interface Patient {
  id: number;
  name: string;
  age: number;
  phone: string;
}

const patients: Patient[] = [
  { id: 1, name: 'John Doe', age: 32, phone: '123-456-7890' },
  { id: 2, name: 'Jane Smith', age: 28, phone: '987-654-3210' },
  { id: 3, name: 'Jim Beam', age: 45, phone: '555-555-5555' },
  { id: 4, name: 'Jill Hill', age: 35, phone: '111-222-3333' },
  { id: 5, name: 'Jack Bauer', age: 50, phone: '444-555-6666' },
  { id: 6, name: 'Jill Hill', age: 35, phone: '111-222-3333' },
  { id: 7, name: 'Jack Bauer', age: 50, phone: '444-555-6666' },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(patients);
}
