export type LiftStatusTone = 'open' | 'hold' | 'closed';
export type TerrainTone = 'success' | 'warning' | 'danger' | 'info';

export const resortStats = {
  openRuns: 47,
  totalRuns: 61,
  snowBase: '142 cm',
  freshSnow: '18 cm',
  wind: '24 km/h NW',
  temperature: '-6 C',
};

export const terrainZones = [
  {
    zone: 'Summit Bowl',
    difficulty: 'Advanced',
    runs: '12 / 14 open',
    grooming: 'Wind buff, packed powder',
    avalanche: 'Moderate',
    patrol: 'Sweep at 15:45',
    tone: 'warning',
  },
  {
    zone: 'Pine Glades',
    difficulty: 'Expert',
    runs: '8 / 10 open',
    grooming: 'Natural snow',
    avalanche: 'Low',
    patrol: 'Tree wells marked',
    tone: 'success',
  },
  {
    zone: 'Meadow Park',
    difficulty: 'Beginner',
    runs: '9 / 9 open',
    grooming: 'Fresh corduroy',
    avalanche: 'Low',
    patrol: 'Lesson traffic high',
    tone: 'info',
  },
  {
    zone: 'North Face',
    difficulty: 'Expert',
    runs: '4 / 7 open',
    grooming: 'Variable crust',
    avalanche: 'High above ridge',
    patrol: 'Upper gate closed',
    tone: 'danger',
  },
] as const;

export const weatherTimeline = [
  { time: '09:00', condition: 'Light snow', visibility: 'Good', temp: '-7 C' },
  { time: '12:00', condition: 'Cloud breaks', visibility: 'Excellent', temp: '-5 C' },
  { time: '15:00', condition: 'Ridge wind', visibility: 'Moderate', temp: '-8 C' },
  { time: '18:00', condition: 'Snow showers', visibility: 'Fair', temp: '-9 C' },
] as const;

export const lifts = [
  {
    name: 'Eagle Express',
    status: 'Open',
    wait: '6 min',
    capacity: '92%',
    lastCheck: '08:42',
    crew: 'Avery / Jules',
    tone: 'open',
  },
  {
    name: 'Summit Tram',
    status: 'Wind hold',
    wait: 'Paused',
    capacity: '0%',
    lastCheck: '09:15',
    crew: 'Mika',
    tone: 'hold',
  },
  {
    name: 'Meadow Quad',
    status: 'Open',
    wait: '3 min',
    capacity: '78%',
    lastCheck: '08:55',
    crew: 'Noah / Priya',
    tone: 'open',
  },
  {
    name: 'North Ridge T-Bar',
    status: 'Mechanical',
    wait: 'Closed',
    capacity: '0%',
    lastCheck: '07:30',
    crew: 'Ops team',
    tone: 'closed',
  },
] as const;

export const maintenanceQueue = [
  { asset: 'Tower 7 sensor', lift: 'Eagle Express', priority: 'Today', owner: 'Lift electrical' },
  { asset: 'Grip inspection', lift: 'Meadow Quad', priority: 'Tonight', owner: 'Mechanical' },
  { asset: 'Haul rope ice', lift: 'Summit Tram', priority: 'Active', owner: 'Mountain ops' },
] as const;

export const events = [
  {
    title: 'Moonlight Snowshoe',
    time: '17:30',
    location: 'Village firepit',
    capacity: '34 / 40',
    owner: 'Guest experience',
  },
  {
    title: 'Junior Race Series',
    time: '10:15',
    location: 'Meadow Park',
    capacity: '56 racers',
    owner: 'Race crew',
  },
  {
    title: 'Avalanche Awareness Talk',
    time: '14:00',
    location: 'Patrol lodge',
    capacity: '18 / 25',
    owner: 'Patrol education',
  },
] as const;

export const eventTasks = [
  'Confirm course netting before 09:45',
  'Move 20 folding chairs to patrol lodge',
  'Send lift-ticket promo to evening guests',
  'Stage headlamps for snowshoe check-in',
] as const;

export const clients = [
  {
    name: 'Morgan Lee',
    segment: 'Season pass',
    stay: 'Lodge 412',
    lessons: 'Private carving, 13:00',
    spend: '$1,840',
    status: 'VIP arrival',
  },
  {
    name: 'Harper Stone',
    segment: 'Family package',
    stay: 'Village condo',
    lessons: 'Kids group, 10:30',
    spend: '$920',
    status: 'Waiver pending',
  },
  {
    name: 'Riley Chen',
    segment: 'Day ticket',
    stay: 'Off mountain',
    lessons: 'None',
    spend: '$168',
    status: 'Rental ready',
  },
  {
    name: 'Sofia Martin',
    segment: 'Corporate group',
    stay: 'Summit hotel',
    lessons: 'Team clinic, 15:00',
    spend: '$4,620',
    status: 'Invoice review',
  },
] as const;

export const incidents = [
  {
    id: 'PAT-1048',
    title: 'Knee injury near Bluebird',
    severity: 'Medical',
    status: 'Transporting',
    owner: 'Patrol 2',
    updated: '9 min ago',
  },
  {
    id: 'OPS-883',
    title: 'Guest stuck above ridge gate',
    severity: 'Search',
    status: 'Contact made',
    owner: 'Patrol lead',
    updated: '17 min ago',
  },
  {
    id: 'FAC-214',
    title: 'Icy stairs at west deck',
    severity: 'Facilities',
    status: 'Salt dispatched',
    owner: 'Facilities',
    updated: '24 min ago',
  },
] as const;

export const radioLog = [
  { time: '09:18', channel: 'Patrol', note: 'Sled team clear of Summit Bowl traverse.' },
  { time: '09:26', channel: 'Lift ops', note: 'Tram hold extended until next wind reading.' },
  { time: '09:33', channel: 'Guest services', note: 'Family reunification desk notified for PAT-1048.' },
] as const;
