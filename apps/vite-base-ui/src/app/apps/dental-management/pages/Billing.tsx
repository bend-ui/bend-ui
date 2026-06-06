import {
  Box,
  Button,
  Heading,
  IconButton,
  Input,
  Stack,
  Text,
} from '@particles/base-ui';
import {
  CalendarDaysIcon,
  DownloadIcon,
  Ellipsis,
  FileTextIcon,
  PlusIcon,
  SearchIcon,
  UserIcon,
} from 'lucide-react';
import { data, Invoice } from '../data';

export const Billing = () => {
  const selectedInvoice = data.invoices[0];
  const paidTotal = data.invoices
    .filter((invoice) => invoice.status === 'Paid')
    .reduce((total, invoice) => total + invoice.amount, 0);
  const openTotal = data.invoices
    .filter((invoice) => invoice.status !== 'Paid')
    .reduce((total, invoice) => total + invoice.amount, 0);
  const overdueCount = data.invoices.filter(
    (invoice) => invoice.status === 'Overdue',
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
              Revenue desk
            </Text>
            <Heading
              as="h1"
              fontSize={{ base: '3xl', md: '4xl' }}
              lineHeight="1.1"
              style={{ textWrap: 'balance' }}
            >
              Billing
            </Heading>
            <Text
              as="p"
              color="fg.muted"
              maxW="56ch"
              style={{ textWrap: 'pretty' }}
            >
              Track invoices, payment status, and outstanding balances across
              the clinic.
            </Text>
          </Stack>

          <Stack direction="row" gap="3" flexWrap="wrap">
            <Metric label="Collected" value={formatCurrency(paidTotal)} tone="success" />
            <Metric label="Outstanding" value={formatCurrency(openTotal)} tone="warning" />
            <Metric label="Overdue" value={overdueCount.toString()} tone="danger" />
          </Stack>
        </Stack>

        <Box
          display="grid"
          gridTemplateColumns={{ base: '1fr', xl: 'minmax(0, 1fr) 360px' }}
          gap="5"
          alignItems="start"
        >
          <Box
            bg="rgba(255, 255, 255, 0.05)"
            borderRadius="16px"
            boxShadow="0 1px 0 rgba(255,255,255,0.08) inset, 0 20px 60px rgba(0,0,0,0.22)"
            overflow="hidden"
          >
            <Stack
              direction={{ base: 'column', lg: 'row' }}
              align={{ base: 'stretch', lg: 'center' }}
              justify="space-between"
              gap="3"
              p="4"
              borderBottom="1px solid rgba(255,255,255,0.08)"
            >
              <Box maxW={{ base: '100%', lg: '320px' }}>
                <Input icon={<SearchIcon />} placeholder="Search invoice #" />
              </Box>
              <Stack direction="row" align="center" gap="2" justify="flex-end" flexWrap="wrap">
                <InvoiceFilters />
                <Button icon={<DownloadIcon />}>Export</Button>
                <Button icon={<PlusIcon />}>New Invoice</Button>
              </Stack>
            </Stack>

            <Box overflowX="auto">
              <Box
                asChild
                width="100%"
                minW="780px"
                borderCollapse="collapse"
                style={{ fontVariantNumeric: 'tabular-nums' }}
              >
                <table>
                  <thead>
                    <Box asChild color="fg.muted">
                      <tr>
                        <HeaderCell>Invoice</HeaderCell>
                        <HeaderCell>Patient</HeaderCell>
                        <HeaderCell>Date</HeaderCell>
                        <HeaderCell align="right">Amount</HeaderCell>
                        <HeaderCell>Status</HeaderCell>
                        <HeaderCell align="right">Actions</HeaderCell>
                      </tr>
                    </Box>
                  </thead>
                  <tbody>
                    {data.invoices.map((invoice) => (
                      <Box
                        asChild
                        key={invoice.id}
                        transitionProperty="background-color"
                        transitionDuration="150ms"
                        _hover={{ bg: 'rgba(255,255,255,0.04)' }}
                      >
                        <tr>
                          <Cell>
                            <InvoiceIdentity invoice={invoice} />
                          </Cell>
                          <Cell>
                            <ContactLine icon={<UserIcon />}>
                              {invoice.patientName}
                            </ContactLine>
                          </Cell>
                          <Cell>
                            <ContactLine icon={<CalendarDaysIcon />}>
                              {formatDate(invoice.date)}
                            </ContactLine>
                          </Cell>
                          <Cell align="right">
                            <Text as="span" fontWeight="medium">
                              {formatCurrency(invoice.amount)}
                            </Text>
                          </Cell>
                          <Cell>
                            <StatusBadge status={invoice.status} />
                          </Cell>
                          <Cell align="right">
                            <IconButton icon={<Ellipsis />}>More</IconButton>
                          </Cell>
                        </tr>
                      </Box>
                    ))}
                  </tbody>
                </table>
              </Box>
            </Box>
          </Box>

          <InvoicePanel invoice={selectedInvoice} />
        </Box>
      </Stack>
    </Box>
  );
};

const InvoiceFilters = () => {
  const filters = ['All', 'Paid', 'Pending', 'Overdue'] as const;

  return (
    <Box
      display="inline-flex"
      bg="rgba(255,255,255,0.05)"
      borderRadius="12px"
      p="1"
      boxShadow="0 1px 0 rgba(255,255,255,0.08) inset"
      style={{ gap: 2 }}
    >
      {filters.map((filter) => {
        const isActive = filter === 'All';
        return (
          <Box
            asChild
            key={filter}
            color={isActive ? 'fg.default' : 'fg.muted'}
            fontSize="sm"
            fontWeight="medium"
            transitionProperty="background-color, color"
            transitionDuration="150ms"
            _hover={{ color: 'fg.default' }}
            style={{
              minHeight: 36,
              paddingInline: 12,
              borderRadius: 9,
              background: isActive ? 'rgba(255,255,255,0.1)' : 'transparent',
            }}
          >
            <button type="button">{filter}</button>
          </Box>
        );
      })}
    </Box>
  );
};

interface InvoicePanelProps {
  invoice: Invoice;
}

const InvoicePanel = (props: InvoicePanelProps) => {
  const { invoice } = props;

  return (
    <Box
      bg="rgba(255, 255, 255, 0.05)"
      borderRadius="16px"
      p="4"
      boxShadow="0 1px 0 rgba(255,255,255,0.08) inset, 0 20px 60px rgba(0,0,0,0.18)"
    >
      <Stack gap="4">
        <Stack gap="3" align="center">
          <Box
            width="80px"
            height="80px"
            borderRadius="18px"
            display="grid"
            placeItems="center"
            bg="rgba(255,255,255,0.08)"
            outline="1px solid rgba(255,255,255,0.1)"
            color="fg.default"
          >
            <FileTextIcon size={34} />
          </Box>
          <Stack gap="1" align="center">
            <Heading as="h2" fontSize="xl">
              {invoice.id}
            </Heading>
            <StatusBadge status={invoice.status} />
          </Stack>
        </Stack>

        <Box h="1px" bg="rgba(255,255,255,0.08)" />

        <Stack gap="3">
          <ProfileRow label="Patient" value={invoice.patientName} />
          <ProfileRow label="Invoice date" value={formatDate(invoice.date)} />
          <ProfileRow label="Amount" value={formatCurrency(invoice.amount)} />
        </Stack>

        <Box h="1px" bg="rgba(255,255,255,0.08)" />

        <Stack gap="2">
          <Text as="span" color="fg.muted" fontSize="sm">
            Line items
          </Text>
          {invoice.items.map((item) => (
            <Stack
              key={item.description}
              direction="row"
              justify="space-between"
              gap="3"
              px="3"
              py="2"
              borderRadius="10px"
              bg="rgba(255,255,255,0.05)"
            >
              <Text as="span" fontSize="sm">
                {item.description}
              </Text>
              <Text as="span" fontSize="sm" fontWeight="medium">
                {formatCurrency(item.cost)}
              </Text>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </Box>
  );
};

interface MetricProps {
  label: string;
  value: string;
  tone?: 'neutral' | 'success' | 'warning' | 'danger';
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
      style={{ background: getToneBackground(tone) }}
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

interface InvoiceIdentityProps {
  invoice: Invoice;
}

const InvoiceIdentity = (props: InvoiceIdentityProps) => {
  const { invoice } = props;

  return (
    <Stack direction="row" align="center" gap="3">
      <Box
        width="40px"
        height="40px"
        borderRadius="10px"
        display="grid"
        placeItems="center"
        bg="rgba(255,255,255,0.08)"
        outline="1px solid rgba(255,255,255,0.1)"
        color="fg.default"
        flexShrink="0"
      >
        <FileTextIcon size={18} />
      </Box>
      <Stack gap="0">
        <Text as="span" fontWeight="medium">
          {invoice.id}
        </Text>
        <Text as="span" fontSize="sm" color="fg.muted">
          {invoice.items.length} line item
        </Text>
      </Stack>
    </Stack>
  );
};

interface StatusBadgeProps {
  status: Invoice['status'];
}

const StatusBadge = (props: StatusBadgeProps) => {
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
        background: getStatusBackground(props.status),
        color: getStatusColor(props.status),
      }}
    >
      <span>{props.status}</span>
    </Box>
  );
};

interface ContactLineProps {
  icon: React.ReactNode;
  children: React.ReactNode;
}

const ContactLine = (props: ContactLineProps) => {
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

interface ProfileRowProps {
  label: string;
  value: string;
}

const ProfileRow = (props: ProfileRowProps) => {
  return (
    <Stack direction="row" justify="space-between" gap="3">
      <Text as="span" color="fg.muted" fontSize="sm">
        {props.label}
      </Text>
      <Text as="span" fontSize="sm" textAlign="right">
        {props.value}
      </Text>
    </Stack>
  );
};

const formatCurrency = (amount: number) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(amount);

const formatDate = (date: string) =>
  new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date(`${date}T00:00:00`));

const getToneBackground = (tone: MetricProps['tone']) => {
  switch (tone) {
    case 'success':
      return 'rgba(34,197,94,0.12)';
    case 'warning':
      return 'rgba(245,158,11,0.12)';
    case 'danger':
      return 'rgba(248,113,113,0.12)';
    default:
      return 'rgba(255,255,255,0.05)';
  }
};

const getStatusBackground = (status: Invoice['status']) => {
  switch (status) {
    case 'Paid':
      return 'rgba(34,197,94,0.14)';
    case 'Pending':
      return 'rgba(245,158,11,0.14)';
    case 'Overdue':
      return 'rgba(248,113,113,0.14)';
  }
};

const getStatusColor = (status: Invoice['status']) => {
  switch (status) {
    case 'Paid':
      return '#86efac';
    case 'Pending':
      return '#fcd34d';
    case 'Overdue':
      return '#fca5a5';
  }
};
