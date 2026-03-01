export type Patient = {
  id: string;
  name: string;
  dob: string;
  email: string;
  phone: string;
  lastVisit: string;
  nextAppointment?: string;
  status: 'Active' | 'Inactive';
  avatarUrl?: string;
  medicalHistory: string[];
};

export type Appointment = {
  id: string;
  patientId: string;
  patientName: string;
  startTime: string; // ISO string
  endTime: string; // ISO string
  type: 'Checkup' | 'Cleaning' | 'Root Canal' | 'Crown' | 'Filling';
  status: 'Scheduled' | 'Confirmed' | 'Completed' | 'Cancelled' | 'No Show';
  chairId: string;
  dentistId: string;
  notes?: string;
};

export type Staff = {
  id: string;
  name: string;
  role: 'Dentist' | 'Hygienist' | 'Receptionist' | 'Assistant';
  avatarUrl?: string;
  color: string; // For calendar coding
};

export type Invoice = {
  id: string;
  patientId: string;
  patientName: string;
  date: string;
  amount: number;
  status: 'Paid' | 'Pending' | 'Overdue';
  items: { description: string; cost: number }[];
};

export type TreatmentPlan = {
  id: string;
  patientId: string;
  name: string;
  procedures: { name: string; cost: number; completed: boolean }[];
  totalCost: number;
  status: 'Proposed' | 'Accepted' | 'Completed';
};
