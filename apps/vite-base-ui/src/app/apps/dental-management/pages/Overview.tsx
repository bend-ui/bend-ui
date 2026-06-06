import {
  Box,
  Button,
  Heading,
  IconButton,
  Stack,
  Text,
} from '@particles/base-ui';
import {
  CalendarDaysIcon,
  CreditCardIcon,
  FilePlusIcon,
  MoreHorizontalIcon,
  PlusIcon,
  ShieldAlertIcon,
  StethoscopeIcon,
  UserPlusIcon,
  UsersIcon,
} from 'lucide-react';
import { data, Staff } from '../data';

const todaySchedule = [
  {
    time: '08:30',
    patient: 'Emma Thompson',
    treatment: 'Hygiene cleaning',
    chair: 'Chair 1',
    status: 'Confirmed',
    tone: 'success',
  },
  {
    time: '10:00',
    patient: 'James Rodriguez',
    treatment: 'Periodic oral evaluation',
    chair: 'Chair 2',
    status: 'In progress',
    tone: 'info',
  },
  {
    time: '11:30',
    patient: 'Sophia Liu',
    treatment: 'Treatment plan consult',
    chair: 'Chair 3',
    status: 'Waiting',
    tone: 'warning',
  },
  {
    time: '14:00',
    patient: 'Robert Johnson',
    treatment: 'Root canal follow-up',
    chair: 'Chair 1',
    status: 'Ready',
    tone: 'neutral',
  },
] as const;

const carePipeline = [
  { label: 'Waiting room', value: 6, tone: 'warning' },
  { label: 'In treatment', value: 3, tone: 'info' },
  { label: 'Ready for checkout', value: 2, tone: 'success' },
  { label: 'Needs follow-up', value: 4, tone: 'danger' },
] as const;

const alerts = [
  '2 overdue invoices need a billing follow-up',
  '3 treatment plans are waiting for patient approval',
  'Insurance documents expire for Emma Thompson in 32 days',
];

export const Overview = () => {
  const activePatients = data.patients.filter(
    (patient) => patient.status === 'Active',
  ).length;
  const paidTotal = data.invoices
    .filter((invoice) => invoice.status === 'Paid')
    .reduce((total, invoice) => total + invoice.amount, 0);
  const openTotal = data.invoices
    .filter((invoice) => invoice.status !== 'Paid')
    .reduce((total, invoice) => total + invoice.amount, 0);

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
              Clinic command center
            </Text>
            <Heading
              as="h1"
              fontSize={{ base: '3xl', md: '4xl' }}
              lineHeight="1.1"
              style={{ textWrap: 'balance' }}
            >
              Dental Management Overview
            </Heading>
            <Text
              as="p"
              color="fg.muted"
              maxW="62ch"
              style={{ textWrap: 'pretty' }}
            >
              Track today&apos;s patient flow, billing risk, clinical capacity,
              and follow-up work from a single operational dashboard.
            </Text>
          </Stack>

          <Stack direction="row" gap="2" flexWrap="wrap">
            <Button icon={<CalendarDaysIcon />}>Today</Button>
            <Button icon={<PlusIcon />}>New Appointment</Button>
          </Stack>
        </Stack>

        <Box
          display="grid"
          gap="3"
          style={{
            gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
          }}
        >
          <Metric
            icon={<UsersIcon />}
            label="Active patients"
            value={activePatients.toString()}
            detail={`${data.patients.length} total records`}
            tone="success"
          />
          <Metric
            icon={<CalendarDaysIcon />}
            label="Today schedule"
            value={todaySchedule.length.toString()}
            detail="2 confirmed, 1 waiting"
            tone="info"
          />
          <Metric
            icon={<CreditCardIcon />}
            label="Outstanding"
            value={formatCurrency(openTotal)}
            detail={`${formatCurrency(paidTotal)} collected`}
            tone="warning"
          />
          <Metric
            icon={<ShieldAlertIcon />}
            label="Care alerts"
            value={alerts.length.toString()}
            detail="Needs review today"
            tone="danger"
          />
        </Box>

        <Box
          display="grid"
          gap="5"
          alignItems="start"
          style={{
            gridTemplateColumns: 'minmax(0, 1fr) 380px',
          }}
        >
          <Stack gap="5">
            <Surface>
              <Stack gap="4">
                <Stack direction="row" justify="space-between" align="center">
                  <Stack gap="1">
                    <Heading as="h2" fontSize="xl">
                      Today&apos;s Schedule
                    </Heading>
                    <Text as="p" color="fg.muted" fontSize="sm">
                      Live chair flow and appointment readiness.
                    </Text>
                  </Stack>
                  <IconButton icon={<MoreHorizontalIcon />}>More</IconButton>
                </Stack>

                <Stack gap="3">
                  {todaySchedule.map((item) => (
                    <ScheduleRow key={`${item.time}-${item.patient}`} item={item} />
                  ))}
                </Stack>
              </Stack>
            </Surface>

            <Box
              display="grid"
              gap="5"
              style={{ gridTemplateColumns: '1fr 1fr' }}
            >
              <Surface>
                <Stack gap="4">
                  <Heading as="h2" fontSize="xl">
                    Care Pipeline
                  </Heading>
                  <Stack gap="3">
                    {carePipeline.map((item) => (
                      <PipelineRow key={item.label} item={item} />
                    ))}
                  </Stack>
                </Stack>
              </Surface>

              <Surface>
                <Stack gap="4">
                  <Heading as="h2" fontSize="xl">
                    Revenue Snapshot
                  </Heading>
                  <Stack gap="3">
                    <RevenueRow label="Collected" value={formatCurrency(paidTotal)} tone="success" />
                    <RevenueRow label="Pending" value={formatCurrency(85)} tone="warning" />
                    <RevenueRow label="Overdue" value={formatCurrency(1200)} tone="danger" />
                  </Stack>
                </Stack>
              </Surface>
            </Box>
          </Stack>

          <Stack gap="5">
            <Surface>
              <Stack gap="4">
                <Heading as="h2" fontSize="xl">
                  Quick Actions
                </Heading>
                <Stack gap="2">
                  <ActionButton icon={<UserPlusIcon />} label="Register patient" />
                  <ActionButton icon={<StethoscopeIcon />} label="Create treatment plan" />
                  <ActionButton icon={<FilePlusIcon />} label="Draft invoice" />
                </Stack>
              </Stack>
            </Surface>

            <Surface>
              <Stack gap="4">
                <Heading as="h2" fontSize="xl">
                  Staff Capacity
                </Heading>
                <Stack gap="3">
                  {data.staff.map((staff, index) => (
                    <StaffRow key={staff.id} staff={staff} index={index} />
                  ))}
                </Stack>
              </Stack>
            </Surface>

            <Surface>
              <Stack gap="4">
                <Heading as="h2" fontSize="xl">
                  Attention Queue
                </Heading>
                <Stack gap="3">
                  {alerts.map((alert) => (
                    <Stack key={alert} direction="row" gap="3" align="start">
                      <Box
                        mt="1"
                        width="8px"
                        height="8px"
                        borderRadius="999px"
                        bg="#fcd34d"
                        flexShrink="0"
                      />
                      <Text as="p" color="fg.muted" fontSize="sm">
                        {alert}
                      </Text>
                    </Stack>
                  ))}
                </Stack>
              </Stack>
            </Surface>
          </Stack>
        </Box>
      </Stack>
    </Box>
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

interface MetricProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  detail: string;
  tone: Tone;
}

const Metric = (props: MetricProps) => (
  <Box
    p="4"
    borderRadius="16px"
    boxShadow="0 1px 0 rgba(255,255,255,0.08) inset"
    style={{ background: getToneBackground(props.tone) }}
  >
    <Stack gap="3">
      <Stack direction="row" justify="space-between" align="center">
        <Box color={getToneColor(props.tone)} lineHeight="0">
          {props.icon}
        </Box>
        <Text as="span" color="fg.muted" fontSize="xs">
          Live
        </Text>
      </Stack>
      <Stack gap="1">
        <Text as="span" fontSize="2xl" fontWeight="semibold" lineHeight="1">
          {props.value}
        </Text>
        <Text as="span" color="fg.muted" fontSize="sm">
          {props.label}
        </Text>
        <Text as="span" color="fg.muted" fontSize="xs">
          {props.detail}
        </Text>
      </Stack>
    </Stack>
  </Box>
);

interface ScheduleRowProps {
  item: (typeof todaySchedule)[number];
}

const ScheduleRow = (props: ScheduleRowProps) => {
  const { item } = props;
  return (
    <Box
      p="3"
      borderRadius="14px"
      bg="rgba(255,255,255,0.04)"
      outline="1px solid rgba(255,255,255,0.07)"
    >
      <Stack direction="row" align="center" justify="space-between" gap="4">
        <Stack direction="row" align="center" gap="3">
          <Box
            width="52px"
            py="2"
            borderRadius="12px"
            textAlign="center"
            bg="rgba(255,255,255,0.06)"
            style={{ fontVariantNumeric: 'tabular-nums' }}
          >
            <Text as="span" fontWeight="semibold" fontSize="sm">
              {item.time}
            </Text>
          </Box>
          <Stack gap="0">
            <Text as="span" fontWeight="medium">
              {item.patient}
            </Text>
            <Text as="span" color="fg.muted" fontSize="sm">
              {item.treatment}
            </Text>
          </Stack>
        </Stack>
        <Stack direction="row" align="center" gap="3">
          <Text as="span" color="fg.muted" fontSize="sm">
            {item.chair}
          </Text>
          <StatusBadge tone={item.tone}>{item.status}</StatusBadge>
        </Stack>
      </Stack>
    </Box>
  );
};

interface PipelineRowProps {
  item: (typeof carePipeline)[number];
}

const PipelineRow = (props: PipelineRowProps) => (
  <Stack gap="2">
    <Stack direction="row" justify="space-between" align="center">
      <Text as="span" fontSize="sm" color="fg.muted">
        {props.item.label}
      </Text>
      <Text as="span" fontWeight="semibold">
        {props.item.value}
      </Text>
    </Stack>
    <Box h="8px" borderRadius="999px" bg="rgba(255,255,255,0.06)" overflow="hidden">
      <Box
        h="100%"
        borderRadius="999px"
        style={{
          width: `${props.item.value * 12}%`,
          background: getToneColor(props.item.tone),
        }}
      />
    </Box>
  </Stack>
);

const RevenueRow = (props: { label: string; value: string; tone: Tone }) => (
  <Stack direction="row" justify="space-between" align="center">
    <Stack direction="row" gap="2" align="center">
      <Box
        width="10px"
        height="10px"
        borderRadius="999px"
        style={{ background: getToneColor(props.tone) }}
      />
      <Text as="span" color="fg.muted" fontSize="sm">
        {props.label}
      </Text>
    </Stack>
    <Text as="span" fontWeight="semibold">
      {props.value}
    </Text>
  </Stack>
);

const ActionButton = (props: { icon: React.ReactNode; label: string }) => (
  <Box
    asChild
  >
    <button
      type="button"
      style={{
        width: '100%',
        minHeight: 44,
        paddingInline: 12,
        borderRadius: 12,
        background: 'rgba(255,255,255,0.05)',
        color: 'inherit',
        transitionProperty: 'background-color',
        transitionDuration: '150ms',
      }}
    >
      <Stack direction="row" align="center" gap="3">
        <Box color="fg.muted" lineHeight="0">
          {props.icon}
        </Box>
        <span>{props.label}</span>
      </Stack>
    </button>
  </Box>
);

const StaffRow = (props: { staff: Staff; index: number }) => (
  <Stack direction="row" align="center" justify="space-between" gap="3">
    <Stack direction="row" align="center" gap="3">
      <Avatar staff={props.staff} />
      <Stack gap="0">
        <Text as="span" fontWeight="medium">
          {props.staff.name}
        </Text>
        <Text as="span" color="fg.muted" fontSize="sm">
          {props.staff.role}
        </Text>
      </Stack>
    </Stack>
    <StatusBadge tone={props.index === 1 ? 'info' : 'success'}>
      {props.index === 1 ? 'With patient' : 'Available'}
    </StatusBadge>
  </Stack>
);

const Avatar = (props: { staff: Staff }) => {
  const initials = props.staff.name
    .split(' ')
    .map((part) => part[0])
    .join('');

  return (
    <Box
      width="40px"
      height="40px"
      borderRadius="999px"
      overflow="hidden"
      bg="rgba(255,255,255,0.08)"
      display="grid"
      placeItems="center"
      flexShrink="0"
      outline="1px solid rgba(255,255,255,0.1)"
    >
      {props.staff.avatarUrl ? (
        <Box
          asChild
          display="block"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        >
          <img src={props.staff.avatarUrl} alt="" />
        </Box>
      ) : (
        <Text as="span" fontSize="sm" fontWeight="semibold">
          {initials}
        </Text>
      )}
    </Box>
  );
};

const StatusBadge = (props: { tone: Tone; children: React.ReactNode }) => (
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
      background: getToneBackground(props.tone),
      color: getToneColor(props.tone),
    }}
  >
    <span>{props.children}</span>
  </Box>
);

type Tone = 'neutral' | 'success' | 'warning' | 'danger' | 'info';

const getToneBackground = (tone: Tone) => {
  switch (tone) {
    case 'success':
      return 'rgba(34,197,94,0.14)';
    case 'warning':
      return 'rgba(245,158,11,0.14)';
    case 'danger':
      return 'rgba(248,113,113,0.14)';
    case 'info':
      return 'rgba(59,130,246,0.14)';
    default:
      return 'rgba(255,255,255,0.06)';
  }
};

const getToneColor = (tone: Tone) => {
  switch (tone) {
    case 'success':
      return '#86efac';
    case 'warning':
      return '#fcd34d';
    case 'danger':
      return '#fca5a5';
    case 'info':
      return '#93c5fd';
    default:
      return 'rgba(226,232,240,0.72)';
  }
};

const formatCurrency = (amount: number) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(amount);
