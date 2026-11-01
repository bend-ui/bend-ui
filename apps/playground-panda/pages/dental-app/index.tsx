'use client';
import { useFetchData } from '@/hooks';
import { Avatar, Button, Menu, Tabs } from '@bend-ui/ark-ui';
import {
  AppShell,
  Box,
  Card,
  Grid,
  Heading,
  IconButton,
  Paragraph,
  Separator,
  Stack,
} from '@bend-ui/base-ui';
import {
  SearchIcon,
  BellIcon,
  CalendarIcon,
  HexagonIcon,
  PlusIcon,
} from 'lucide-react';
import Link from 'next/link';
import { AppointmentCard } from '@/components/dental-app';

const DentalApp = () => {
  const { data: appointments, loading } = useFetchData(
    '/api/dental-app/appointments',
  );

  const confirmedAppointments = appointments?.filter(
    (appointment: any) => appointment.status === 'confirmed',
  );

  const pendingAppointments = appointments?.filter(
    (appointment: any) => appointment.status === 'pending',
  );

  const cancelledAppointments = appointments?.filter(
    (appointment: any) => appointment.status === 'cancelled',
  );

  return (
    <AppShell>
      <AppShell.Header>
        <Stack direction="row" align="center" justify="space-between">
          <Box>
            <HexagonIcon />
            <nav aria-label="Breadcrumb">
              <Link href="/dental-app">Home</Link>
              <Link href="/dental-app/patients">Patients</Link>
            </nav>
          </Box>
          <Box>
            <Stack direction="row">
              <IconButton icon={<SearchIcon />}>Search</IconButton>
              <IconButton icon={<BellIcon />}>Notifications</IconButton>
            </Stack>
            <Separator />
            <Avatar.Root>
              <Avatar.Image src="https://github.com/shadcn.png" />
              <Avatar.Fallback>CN</Avatar.Fallback>
            </Avatar.Root>
          </Box>
        </Stack>
      </AppShell.Header>
      <AppShell.Sidebar>
        <nav aria-label="Dental management">
          <Link href="/dental-app">Appointments</Link>
          <Link href="/dental-app/patients">Patients</Link>
          <Link href="/dental-app/doctors">Doctors</Link>
        </nav>
      </AppShell.Sidebar>
      <AppShell.Main>
        <Box>
          <Stack direction="row" align="center" justify="space-between">
            <Box>
              <Heading>Patients appointments</Heading>
            </Box>
            <Stack direction="row">
              <Button>
                <CalendarIcon /> January 2025
              </Button>
              <Stack direction="row" gap="0">
                <Button>Add new appointment</Button>
                <Menu.Root>
                  <Menu.Trigger asChild>
                    <IconButton icon={<PlusIcon />}>
                      Add new appointment
                    </IconButton>
                  </Menu.Trigger>
                  <Menu.Positioner>
                    <Menu.Content>
                      <Menu.Item value="add-new-appointment">
                        Add new appointment
                      </Menu.Item>
                      <Menu.Item value="add-new-patient">
                        Add new patient
                      </Menu.Item>
                    </Menu.Content>
                  </Menu.Positioner>
                </Menu.Root>
              </Stack>
            </Stack>
          </Stack>
          <Grid columns={4}>
            <Grid.Item>
              <Card>
                <Card.Section>
                  <Heading>Appointment</Heading>
                </Card.Section>
              </Card>
            </Grid.Item>
            <Grid.Item>
              <Card>
                <Card.Section>
                  <Heading>Appointment</Heading>
                </Card.Section>
              </Card>
            </Grid.Item>
            <Grid.Item>
              <Card>
                <Card.Section>
                  <Heading>Appointment</Heading>
                </Card.Section>
              </Card>
            </Grid.Item>
            <Grid.Item>
              <Card>
                <Card.Section>
                  <Heading>Appointment</Heading>
                </Card.Section>
              </Card>
            </Grid.Item>
          </Grid>
          <Tabs.Root defaultValue="confirmed">
            <Tabs.List>
              <Tabs.Trigger value="confirmed">
                Confirmed {confirmedAppointments.length}
              </Tabs.Trigger>
              <Tabs.Trigger value="pending">
                Pending {pendingAppointments.length}
              </Tabs.Trigger>
              <Tabs.Trigger value="cancelled">
                Cancelled {cancelledAppointments.length}
              </Tabs.Trigger>
            </Tabs.List>
            <Tabs.Content value="confirmed">
              {loading ? (
                <Paragraph>Loading...</Paragraph>
              ) : (
                <Grid columns={3}>
                  {confirmedAppointments.map((appointment: any) => (
                    <Grid.Item key={appointment.id}>
                      <AppointmentCard data={appointment} />
                    </Grid.Item>
                  ))}
                </Grid>
              )}
            </Tabs.Content>
            <Tabs.Content value="pending">
              {loading ? (
                <Paragraph>Loading...</Paragraph>
              ) : (
                <Grid columns={3}>
                  {pendingAppointments.map((appointment: any) => (
                    <Grid.Item key={appointment.id}>
                      <AppointmentCard data={appointment} />
                    </Grid.Item>
                  ))}
                </Grid>
              )}
            </Tabs.Content>
            <Tabs.Content value="cancelled">
              {loading ? (
                <Paragraph>Loading...</Paragraph>
              ) : (
                <Grid columns={3}>
                  {cancelledAppointments.map((appointment: any) => (
                    <Grid.Item key={appointment.id}>
                      <AppointmentCard data={appointment} />
                    </Grid.Item>
                  ))}
                </Grid>
              )}
            </Tabs.Content>
          </Tabs.Root>
        </Box>
      </AppShell.Main>
    </AppShell>
  );
};

export default DentalApp;
