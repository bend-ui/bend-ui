import {
  Box,
  Button,
  Heading,
  IconButton,
  Input,
  Dialog,
  Stack,
  Text,
} from '@particles/base-ui';
import {
  CalendarDaysIcon,
  CheckIcon,
  ChevronRightIcon,
  DownloadIcon,
  Edit3Icon,
  Ellipsis,
  FileArchiveIcon,
  FileTextIcon,
  MailIcon,
  PhoneIcon,
  PlusIcon,
  SearchIcon,
  SmartphoneIcon,
  VideoIcon,
  XIcon,
} from 'lucide-react';
import { data, Patient } from '../data';

const queuePatients = [
  ...data.patients,
  {
    id: '5',
    name: 'Kathryn Murphy',
    dob: '1990-06-18',
    email: 'kathryn23@example.com',
    phone: '(555) 310-4420',
    lastVisit: '2024-01-02',
    status: 'Active' as const,
    medicalHistory: ['New patient consultation'],
    avatarUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop',
  },
  {
    id: '6',
    name: 'Brooklyn Simmons',
    dob: '1988-09-04',
    email: 'brooklyn.s@example.com',
    phone: '(555) 498-5034',
    lastVisit: '2023-12-12',
    status: 'Active' as const,
    medicalHistory: [],
  },
];

const scheduleItems = [
  {
    date: '2024-02-12',
    title: 'Prosthetic tooth fabrication',
    doctor: 'Dr. Wade Warren',
    tone: '#60a5fa',
  },
  {
    date: '2024-01-18',
    title: 'Post-surgical care',
    doctor: 'Dr. Marvin McKinney',
    tone: '#fb7185',
  },
  {
    date: '2023-12-08',
    title: 'Implant placement',
    doctor: 'Dr. Floyd Miles',
    tone: '#86efac',
  },
];

const dentalHistory = [
  {
    id: '#12324',
    treatment: 'Implant',
    date: '2023-06-12',
    result: 'Well done',
    payment: 'Pending',
  },
  {
    id: '#20324',
    treatment: 'Root canal',
    date: '2023-05-04',
    result: 'Well done',
    payment: 'Paid',
  },
  {
    id: '#57686',
    treatment: 'Dentures',
    date: '2023-03-02',
    result: 'Well done',
    payment: 'Paid',
  },
  {
    id: '#68767',
    treatment: 'Whitening',
    date: '2023-02-16',
    result: 'Well done',
    payment: 'Paid',
  },
];

const documents = [
  { name: 'Agreement_Meditation.zip', size: '2.3 mb', icon: FileArchiveIcon },
  { name: 'Provision of information.pdf', size: '1.2 mb', icon: FileTextIcon },
  { name: 'Treatment consent.pdf', size: '842 kb', icon: FileTextIcon },
];

const approvalCards = [
  {
    id: '#44323',
    patient: queuePatients[0],
    type: 'Regular',
    doctor: 'Dr. Dianne Rachel',
    schedule: '2024-01-07T10:30:00',
  },
  {
    id: '#66423',
    patient: queuePatients[4],
    type: 'Member',
    doctor: 'Dr. Marvin Maverick',
    schedule: '2024-01-04T11:30:00',
  },
  {
    id: '#23544',
    patient: queuePatients[2],
    type: 'Assurance',
    doctor: 'Dr. Floyd Moukoko',
    schedule: '2024-01-02T09:30:00',
  },
];

export const Patients = () => {
  const selectedPatient = data.patients[0];
  const activePatients = data.patients.filter(
    (patient) => patient.status === 'Active',
  ).length;

  return (
    <Box
      minH="100vh"
      p={{ base: '4', md: '6' }}
      bg="rgba(255, 255, 255, 0.02)"
      color="fg.default"
      style={{ WebkitFontSmoothing: 'antialiased' }}
    >
      <Stack gap="6">
        <Stack
          direction={{ base: 'column', lg: 'row' }}
          align={{ base: 'stretch', lg: 'center' }}
          justify="space-between"
          gap="4"
        >
          <Stack gap="1">
            <Text
              as="span"
              fontSize="xs"
              fontWeight="semibold"
              color="fg.muted"
              textTransform="uppercase"
              letterSpacing="0"
            >
              Patient workspace
            </Text>
            <Heading
              as="h1"
              fontSize={{ base: '3xl', md: '4xl' }}
              lineHeight="1.1"
              style={{ textWrap: 'balance' }}
            >
              Patients
            </Heading>
            <Text
              as="p"
              color="fg.muted"
              maxW="58ch"
              style={{ textWrap: 'pretty' }}
            >
              Manage the waiting queue, patient profile, treatment history, and
              intake approvals from one clinic view.
            </Text>
          </Stack>

          <Stack direction="row" gap="3" flexWrap="wrap">
            <Metric label="Total patients" value={data.patients.length.toString()} />
            <Metric label="Active" value={activePatients.toString()} tone="success" />
            <Metric label="Approvals" value={approvalCards.length.toString()} tone="warning" />
          </Stack>
        </Stack>

        <Box
          gap="5"
          alignItems="start"
          style={{
            display: 'grid',
            gridTemplateColumns: '280px minmax(0, 1fr)',
          }}
        >
          <PatientQueue selectedPatient={selectedPatient} />
          <PatientDashboard patient={selectedPatient} />
        </Box>

        <ApprovalQueue />
      </Stack>
    </Box>
  );
};

interface PatientQueueProps {
  selectedPatient: Patient;
}

const PatientQueue = (props: PatientQueueProps) => {
  return (
    <Surface>
      <Stack gap="4">
        <Stack direction="row" justify="space-between" align="center">
          <Heading as="h2" fontSize="lg">
            Patient Queue
          </Heading>
          <IconButton icon={<SearchIcon />}>Search patients</IconButton>
        </Stack>
        <Box
          display="inline-flex"
          bg="rgba(255,255,255,0.05)"
          borderRadius="12px"
          p="1"
          boxShadow="0 1px 0 rgba(255,255,255,0.08) inset"
          style={{ gap: 2 }}
        >
          {['All', 'Oldest', 'Newest'].map((filter) => (
            <FilterButton key={filter} active={filter === 'All'}>
              {filter}
            </FilterButton>
          ))}
        </Box>
        <Stack gap="3">
          {queuePatients.map((patient) => {
            const isSelected = patient.id === props.selectedPatient.id;
            return (
              <Box
                key={patient.id}
                p="3"
                borderRadius="14px"
                bg={isSelected ? 'rgba(59,130,246,0.12)' : 'rgba(255,255,255,0.04)'}
                outline={
                  isSelected
                    ? '1px solid rgba(96,165,250,0.7)'
                    : '1px solid rgba(255,255,255,0.07)'
                }
                transitionProperty="background-color, outline-color"
                transitionDuration="150ms"
              >
                <Stack direction="row" justify="space-between" gap="3">
                  <Stack direction="row" align="center" gap="3">
                    <Avatar patient={patient} size="40px" />
                    <Stack gap="0">
                      <Text as="span" fontWeight="medium">
                        {patient.name}
                      </Text>
                      <Text as="span" fontSize="sm" color="fg.muted">
                        Register: {formatDate(patient.lastVisit)}
                      </Text>
                    </Stack>
                  </Stack>
                  <Stack direction="row" align="center" gap="2">
                    <IconButton icon={<Ellipsis />}>More</IconButton>
                    <IconButton icon={<ChevronRightIcon />}>Open profile</IconButton>
                  </Stack>
                </Stack>
              </Box>
            );
          })}
        </Stack>
      </Stack>
    </Surface>
  );
};

interface PatientDashboardProps {
  patient: Patient;
}

const PatientDashboard = (props: PatientDashboardProps) => {
  const { patient } = props;

  return (
    <Surface>
      <Stack gap="5">
        <Stack
          direction={{ base: 'column', lg: 'row' }}
          align={{ base: 'stretch', lg: 'center' }}
          justify="space-between"
          gap="4"
        >
          <Stack direction="row" align="center" gap="3">
            <Avatar patient={patient} size="56px" />
            <Stack gap="1">
              <Stack direction="row" align="center" gap="2">
                <Heading as="h2" fontSize="2xl">
                  {patient.name}
                </Heading>
                <StatusBadge status={patient.status} />
              </Stack>
              <ContactLine icon={<CalendarDaysIcon />}>
                Joined since {formatDate(patient.lastVisit)}
              </ContactLine>
            </Stack>
          </Stack>
          <Stack direction="row" gap="2" flexWrap="wrap">
            <IconButton icon={<MailIcon />}>Email patient</IconButton>
            <IconButton icon={<PhoneIcon />}>Call patient</IconButton>
            <IconButton icon={<SmartphoneIcon />}>Text patient</IconButton>
            <IconButton icon={<VideoIcon />}>Video visit</IconButton>
            <IconButton icon={<Edit3Icon />}>Edit patient</IconButton>
          </Stack>
        </Stack>

        <Box
          gap="4"
          alignItems="stretch"
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr) 320px',
          }}
        >
          <BasicInformation patient={patient} />
          <AppointmentSchedule />
          <Stack gap="4">
            <AssuranceCard />
            <MembershipCard />
          </Stack>
        </Box>

        <Box
          gap="4"
          alignItems="start"
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1fr) 320px',
          }}
        >
          <DentalHistory />
          <AgreementDocuments />
        </Box>
      </Stack>
    </Surface>
  );
};

const BasicInformation = (props: PatientDashboardProps) => {
  const { patient } = props;

  return (
    <Panel title="Basic Information">
      <Stack gap="4">
        <InfoLine label="Gender" value="Female" />
        <InfoLine label="Birthday" value={formatDate(patient.dob)} />
        <InfoLine label="Phone Number" value={patient.phone} />
        <InfoLine label="Email" value={patient.email} />
        <Stack gap="2">
          <Text as="span" color="fg.muted" fontSize="sm">
            Sources
          </Text>
          <Stack direction="row" gap="2">
            {['M', 'G', 'T', 'W'].map((source) => (
              <Box
                key={source}
                width="32px"
                height="32px"
                borderRadius="9px"
                display="grid"
                placeItems="center"
                bg="rgba(255,255,255,0.06)"
                fontSize="xs"
                fontWeight="semibold"
              >
                {source}
              </Box>
            ))}
          </Stack>
        </Stack>
      </Stack>
    </Panel>
  );
};

const AppointmentSchedule = () => {
  return (
    <Panel title="Appointment Schedule">
      <Stack gap="0" pt="1">
        {scheduleItems.map((item, index) => (
          <Stack key={item.title} direction="row" gap="3" align="stretch">
            <Stack align="center" gap="0">
              <Box
                width="14px"
                height="14px"
                borderRadius="999px"
                outline="3px solid rgba(96,165,250,0.18)"
                style={{ background: item.tone }}
              />
              {index < scheduleItems.length - 1 ? (
                <Box width="1px" flex="1" bg="rgba(96,165,250,0.35)" />
              ) : null}
            </Stack>
            <Stack gap="2" pb={index < scheduleItems.length - 1 ? '4' : '0'}>
              <Text as="span" color="fg.muted" fontSize="sm">
                {formatDate(item.date)}
              </Text>
              <Box
                p="3"
                borderRadius="12px"
                bg="rgba(255,255,255,0.05)"
                outline="1px solid rgba(255,255,255,0.08)"
              >
                <Text as="div" fontWeight="medium">
                  {item.title}
                </Text>
                <Text as="div" mt="1" color="fg.muted" fontSize="sm">
                  {item.doctor}
                </Text>
              </Box>
            </Stack>
          </Stack>
        ))}
      </Stack>
    </Panel>
  );
};

const AssuranceCard = () => {
  return (
    <Box
      p="4"
      minH="180px"
      borderRadius="16px"
      color="white"
      boxShadow="0 20px 50px rgba(59,130,246,0.2)"
      style={{
        background:
          'linear-gradient(135deg, rgba(37,99,235,0.95), rgba(168,85,247,0.92))',
      }}
    >
      <Stack justify="space-between" minH="148px">
        <Stack direction="row" justify="space-between">
          <Text as="span" fontWeight="semibold">
            Data of assurance
          </Text>
          <Ellipsis size={18} />
        </Stack>
        <Text as="div" fontSize="2xl" fontWeight="semibold">
          234-234-232-32
        </Text>
        <Stack direction="row" justify="space-between">
          <InfoMicro label="Expiry" value="Feb 23, 2026" />
          <InfoMicro label="Status" value="Activated" />
        </Stack>
      </Stack>
    </Box>
  );
};

const MembershipCard = () => {
  return (
    <Panel title="Member Dentalica">
      <Stack direction="row" align="center" justify="space-between" gap="4">
        <Box
          width="86px"
          height="86px"
          borderRadius="999px"
          display="grid"
          placeItems="center"
          bg="rgba(59,130,246,0.14)"
          boxShadow="inset 0 0 0 10px rgba(59,130,246,0.25)"
        >
          <Stack gap="0" align="center">
            <Text as="span" fontSize="2xl" fontWeight="semibold">
              32
            </Text>
            <Text as="span" fontSize="xs" color="fg.muted">
              Days
            </Text>
          </Stack>
        </Box>
        <Stack gap="3">
          <InfoMicro label="Start date joined" value="Dec 12, 2023" />
          <Button>Extend</Button>
        </Stack>
      </Stack>
    </Panel>
  );
};

const DentalHistory = () => {
  return (
    <Panel title="Dental History">
      <Box overflowX="auto">
        <Box
          asChild
          width="100%"
          minW="640px"
          borderCollapse="collapse"
          style={{ fontVariantNumeric: 'tabular-nums' }}
        >
          <table>
            <thead>
              <Box asChild color="fg.muted">
                <tr>
                  <HeaderCell>ID</HeaderCell>
                  <HeaderCell>Treatment</HeaderCell>
                  <HeaderCell>Date</HeaderCell>
                  <HeaderCell>Result</HeaderCell>
                  <HeaderCell>Payment</HeaderCell>
                </tr>
              </Box>
            </thead>
            <tbody>
              {dentalHistory.map((item) => (
                <tr key={item.id}>
                  <Cell>{item.id}</Cell>
                  <Cell>{item.treatment}</Cell>
                  <Cell>{formatDate(item.date)}</Cell>
                  <Cell>
                    <ResultBadge>{item.result}</ResultBadge>
                  </Cell>
                  <Cell>
                    <PaymentBadge status={item.payment} />
                  </Cell>
                </tr>
              ))}
            </tbody>
          </table>
        </Box>
      </Box>
    </Panel>
  );
};

const AgreementDocuments = () => {
  return (
    <Panel title="Agreement Documents">
      <Stack gap="3">
        {documents.map((document) => {
          const Icon = document.icon;
          return (
            <Box
              key={document.name}
              p="3"
              borderRadius="12px"
              bg="rgba(255,255,255,0.05)"
              outline="1px solid rgba(255,255,255,0.08)"
            >
              <Stack direction="row" justify="space-between" align="center" gap="3">
                <Stack direction="row" align="center" gap="3">
                  <Box color="fg.muted" lineHeight="0">
                    <Icon size={20} />
                  </Box>
                  <Stack gap="0">
                    <Text as="span" fontSize="sm" fontWeight="medium">
                      {document.name}
                    </Text>
                    <Text as="span" color="fg.muted" fontSize="xs">
                      {document.size}
                    </Text>
                  </Stack>
                </Stack>
                <IconButton icon={<DownloadIcon />}>Download</IconButton>
              </Stack>
            </Box>
          );
        })}
      </Stack>
    </Panel>
  );
};

const ApprovalQueue = () => {
  return (
    <Surface>
      <Stack gap="5">
        <Stack
          direction={{ base: 'column', lg: 'row' }}
          align={{ base: 'stretch', lg: 'center' }}
          justify="space-between"
          gap="4"
        >
          <Stack gap="1">
            <Text
              as="span"
              fontSize="xs"
              fontWeight="semibold"
              color="fg.muted"
              textTransform="uppercase"
              letterSpacing="0"
            >
              Intake approvals
            </Text>
            <Heading as="h2" fontSize="2xl">
              Approval New Patient
            </Heading>
          </Stack>
          <Stack direction="row" gap="2" flexWrap="wrap">
            <Button icon={<CalendarDaysIcon />}>January 2024</Button>
            <AddPatientModal />
          </Stack>
        </Stack>

        <Box
          gap="3"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
          }}
        >
          <ApprovalMetric label="All apply queue" value="1432" delta="+4" />
          <ApprovalMetric label="New patient regular" value="432" delta="+16" />
          <ApprovalMetric label="New patient member" value="500" delta="+2" />
          <ApprovalMetric label="New patient assurance" value="500" delta="+5" />
        </Box>

        <Stack direction="row" gap="2" flexWrap="wrap">
          {['Accepted', 'In Queue', 'Urgent', 'Archive'].map((tab) => (
            <FilterButton key={tab} active={tab === 'In Queue'}>
              {tab}
            </FilterButton>
          ))}
        </Stack>

        <Box
          gap="4"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
          }}
        >
          {approvalCards.map((card) => (
            <ApprovalCard key={card.id} card={card} />
          ))}
        </Box>
      </Stack>
    </Surface>
  );
};

interface ApprovalCardProps {
  card: (typeof approvalCards)[number];
}

const ApprovalCard = (props: ApprovalCardProps) => {
  const { card } = props;

  return (
    <Box
      p="4"
      borderRadius="16px"
      bg="rgba(255,255,255,0.05)"
      outline="1px solid rgba(255,255,255,0.08)"
      boxShadow="0 14px 40px rgba(0,0,0,0.16)"
    >
      <Stack gap="4">
        <Stack direction="row" justify="space-between" align="center">
          <Stack direction="row" gap="2" align="center">
            <Box
              width="34px"
              height="34px"
              borderRadius="10px"
              display="grid"
              placeItems="center"
              bg="rgba(255,255,255,0.08)"
            >
              <FileTextIcon size={18} />
            </Box>
            <Text as="span" fontSize="xl" fontWeight="semibold">
              {card.id}
            </Text>
          </Stack>
          <TypeBadge type={card.type} />
        </Stack>

        <Box h="1px" bg="rgba(255,255,255,0.08)" />

        <Box display="grid" gridTemplateColumns="1fr 1fr" gap="4">
          <ApprovalInfo label="Patient name" value={card.patient.name} />
          <ApprovalInfo label="Date of register" value="Dec 12, 2023" />
          <ApprovalInfo label="Telephone number" value={card.patient.phone} />
          <ApprovalInfo label="E-mail" value={card.patient.email} />
        </Box>

        <Stack direction="row" align="center" gap="3">
          <Avatar patient={card.patient} size="36px" />
          <ApprovalInfo
            label="Estimation schedule"
            value={formatDateTime(card.schedule)}
          />
        </Stack>

        <Stack direction="row" gap="2">
          <Button icon={<XIcon />}>Decline</Button>
          <Button icon={<CheckIcon />}>Approve</Button>
        </Stack>
      </Stack>
    </Box>
  );
};

const AddPatientModal = () => {
  return (
    <Dialog>
      <Dialog.Trigger>
        <Stack direction="row" align="center" gap="2">
          <PlusIcon size={16} />
          <span>Add Patient</span>
        </Stack>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Popup>
            <Stack gap="4" minW={{ base: 'min(92vw, 360px)', md: '420px' }}>
              <Stack gap="1">
                <Dialog.Title>Add Patient</Dialog.Title>
                <Dialog.Description>
                  Create a new record for the clinic roster.
                </Dialog.Description>
              </Stack>
              <Stack gap="3">
                <Input placeholder="Name" />
                <Input placeholder="Email" />
                <Input placeholder="Phone" />
              </Stack>
              <Stack direction="row" justify="flex-end" gap="2">
                <Dialog.Close>Cancel</Dialog.Close>
                <Button>Save</Button>
              </Stack>
            </Stack>
          </Dialog.Popup>
        </Dialog.Positioner>
      </Dialog.Portal>
    </Dialog>
  );
};

interface SurfaceProps {
  children: React.ReactNode;
}

const Surface = (props: SurfaceProps) => (
  <Box
    bg="rgba(255, 255, 255, 0.05)"
    borderRadius="16px"
    p="4"
    boxShadow="0 1px 0 rgba(255,255,255,0.08) inset, 0 20px 60px rgba(0,0,0,0.22)"
  >
    {props.children}
  </Box>
);

interface PanelProps {
  title: string;
  children: React.ReactNode;
}

const Panel = (props: PanelProps) => (
  <Box
    p="4"
    borderRadius="16px"
    bg="rgba(255,255,255,0.035)"
    outline="1px solid rgba(255,255,255,0.08)"
  >
    <Stack gap="4">
      <Heading as="h3" fontSize="lg">
        {props.title}
      </Heading>
      {props.children}
    </Stack>
  </Box>
);

interface MetricProps {
  label: string;
  value: string;
  tone?: 'neutral' | 'success' | 'warning';
}

const Metric = (props: MetricProps) => {
  const { label, value, tone = 'neutral' } = props;
  return (
    <Box
      minW="132px"
      px="4"
      py="3"
      borderRadius="14px"
      boxShadow="0 1px 0 rgba(255,255,255,0.08) inset"
      style={{
        background:
          tone === 'success'
            ? 'rgba(34,197,94,0.12)'
            : tone === 'warning'
              ? 'rgba(245,158,11,0.12)'
              : 'rgba(255,255,255,0.05)',
      }}
    >
      <Text as="div" fontSize="2xl" fontWeight="semibold" lineHeight="1">
        {value}
      </Text>
      <Text as="div" mt="1" fontSize="xs" color="fg.muted">
        {label}
      </Text>
    </Box>
  );
};

interface ApprovalMetricProps {
  label: string;
  value: string;
  delta: string;
}

const ApprovalMetric = (props: ApprovalMetricProps) => (
  <Box
    p="4"
    borderRadius="14px"
    bg="rgba(255,255,255,0.04)"
    outline="1px solid rgba(255,255,255,0.08)"
  >
    <Stack gap="2">
      <Text as="span" color="fg.muted" fontSize="sm">
        {props.label}
      </Text>
      <Text as="span" fontSize="2xl" fontWeight="semibold">
        {props.value} Patient
      </Text>
      <Stack direction="row" gap="2" align="center">
        <Text
          as="span"
          px="2"
          borderRadius="999px"
          bg="rgba(20,184,166,0.14)"
          color="#5eead4"
          fontSize="sm"
          fontWeight="medium"
        >
          {props.delta}
        </Text>
        <Text as="span" color="fg.muted" fontSize="sm">
          In this month
        </Text>
      </Stack>
    </Stack>
  </Box>
);

interface AvatarProps {
  patient: Patient;
  size: string;
}

const Avatar = (props: AvatarProps) => {
  const { patient, size } = props;
  const initials = patient.name
    .split(' ')
    .map((part) => part[0])
    .join('');

  return (
    <Box
      borderRadius="999px"
      overflow="hidden"
      bg="rgba(255,255,255,0.08)"
      display="grid"
      placeItems="center"
      color="fg.default"
      fontWeight="semibold"
      flexShrink="0"
      outline="1px solid rgba(255,255,255,0.1)"
      style={{ width: size, height: size }}
    >
      {patient.avatarUrl ? (
        <Box
          asChild
          display="block"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        >
          <img src={patient.avatarUrl} alt="" />
        </Box>
      ) : (
        initials
      )}
    </Box>
  );
};

interface StatusBadgeProps {
  status: Patient['status'];
}

const StatusBadge = (props: StatusBadgeProps) => {
  const isActive = props.status === 'Active';
  return (
    <Box
      asChild
      fontSize="xs"
      fontWeight="medium"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        minHeight: '28px',
        paddingInline: '10px',
        borderRadius: '999px',
        background: isActive
          ? 'rgba(34,197,94,0.14)'
          : 'rgba(148,163,184,0.14)',
        color: isActive ? '#86efac' : 'rgba(226,232,240,0.72)',
      }}
    >
      <span>{isActive ? 'Member' : props.status}</span>
    </Box>
  );
};

const TypeBadge = (props: { type: string }) => {
  const tone =
    props.type === 'Member'
      ? ['rgba(34,197,94,0.14)', '#86efac']
      : props.type === 'Assurance'
        ? ['rgba(245,158,11,0.14)', '#fcd34d']
        : ['rgba(14,165,233,0.14)', '#7dd3fc'];

  return (
    <Box
      asChild
      fontSize="xs"
      fontWeight="medium"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        minHeight: '28px',
        paddingInline: '10px',
        borderRadius: '8px',
        background: tone[0],
        color: tone[1],
      }}
    >
      <span>{props.type}</span>
    </Box>
  );
};

const PaymentBadge = (props: { status: string }) => {
  const isPaid = props.status === 'Paid';
  return (
    <Box
      asChild
      fontSize="xs"
      fontWeight="medium"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        minHeight: '26px',
        paddingInline: '8px',
        borderRadius: '8px',
        background: isPaid ? 'rgba(34,197,94,0.14)' : 'rgba(245,158,11,0.14)',
        color: isPaid ? '#86efac' : '#fcd34d',
      }}
    >
      <span>{props.status}</span>
    </Box>
  );
};

const ResultBadge = (props: { children: React.ReactNode }) => (
  <Box
    asChild
    fontSize="xs"
    fontWeight="medium"
    style={{
      display: 'inline-flex',
      alignItems: 'center',
      minHeight: '26px',
      paddingInline: '8px',
      borderRadius: '999px',
      background: 'rgba(20,184,166,0.12)',
      color: '#5eead4',
    }}
  >
    <span>{props.children}</span>
  </Box>
);

const FilterButton = (props: { active?: boolean; children: React.ReactNode }) => (
  <Box
    asChild
    color={props.active ? 'fg.default' : 'fg.muted'}
    fontSize="sm"
    fontWeight="medium"
    transitionProperty="background-color, color"
    transitionDuration="150ms"
    _hover={{ color: 'fg.default' }}
    style={{
      minHeight: 36,
      paddingInline: 12,
      borderRadius: 9,
      background: props.active ? 'rgba(255,255,255,0.1)' : 'transparent',
    }}
  >
    <button type="button">{props.children}</button>
  </Box>
);

const ContactLine = (props: { icon: React.ReactNode; children: React.ReactNode }) => {
  return (
    <Stack direction="row" align="center" gap="2">
      <Box
        color="fg.muted"
        lineHeight="0"
        flexShrink="0"
        css={{ '& svg': { width: '14px', height: '14px' } }}
      >
        {props.icon}
      </Box>
      <Text as="span" fontSize="sm" color="fg.muted">
        {props.children}
      </Text>
    </Stack>
  );
};

const InfoLine = (props: { label: string; value: string }) => (
  <Stack gap="1">
    <Text as="span" color="fg.muted" fontSize="sm">
      {props.label}
    </Text>
    <Text as="span">{props.value}</Text>
  </Stack>
);

const InfoMicro = (props: { label: string; value: string }) => (
  <Stack gap="1">
    <Text as="span" color="rgba(255,255,255,0.72)" fontSize="sm">
      {props.label}
    </Text>
    <Text as="span" fontWeight="medium">
      {props.value}
    </Text>
  </Stack>
);

const ApprovalInfo = (props: { label: string; value: string }) => (
  <Stack gap="1">
    <Text as="span" color="fg.muted" fontSize="sm">
      {props.label}
    </Text>
    <Text as="span" fontWeight="medium">
      {props.value}
    </Text>
  </Stack>
);

interface HeaderCellProps {
  children: React.ReactNode;
  align?: 'left' | 'right';
}

const HeaderCell = (props: HeaderCellProps) => {
  return (
    <Box
      asChild
      px="4"
      py="3"
      textAlign={props.align ?? 'left'}
      fontSize="xs"
      fontWeight="semibold"
      textTransform="uppercase"
      letterSpacing="0"
      borderBottom="1px solid rgba(255,255,255,0.08)"
    >
      <th>{props.children}</th>
    </Box>
  );
};

interface CellProps {
  children: React.ReactNode;
  align?: 'left' | 'right';
}

const Cell = (props: CellProps) => {
  return (
    <Box
      asChild
      px="4"
      py="3"
      textAlign={props.align ?? 'left'}
      borderBottom="1px solid rgba(255,255,255,0.06)"
      verticalAlign="middle"
    >
      <td>{props.children}</td>
    </Box>
  );
};

const formatDate = (date: string) =>
  new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date(`${date}T00:00:00`));

const formatDateTime = (date: string) =>
  new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  }).format(new Date(date));
