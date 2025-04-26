'use client';
import { useFetchData } from '@/hooks';
import {
  Heading,
  AppShell,
  Avatar,
  Box,
  Breadcrumbs,
  Divider,
  IconButton,
  Level,
  Nav,
  Button,
  ButtonGroup,
  Card,
  Grid,
  Paragraph,
  Menu,
  Tabs,
} from '@particles/ark';
import { SearchIcon, BellIcon, CalendarIcon, HexagonIcon } from 'lucide-react';
import Link from 'next/link';
import { AppointmentCard } from './components';

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
        <Level>
          <Box>
            <HexagonIcon />
            <Breadcrumbs>
              <Breadcrumbs.Item>
                <Link href="/dental-app">Home</Link>
              </Breadcrumbs.Item>
              <Breadcrumbs.Item>
                <Link href="/dental-app/patients">Patients</Link>
              </Breadcrumbs.Item>
            </Breadcrumbs>
          </Box>
          <Box>
            <ButtonGroup>
              <IconButton>
                <SearchIcon />
              </IconButton>
              <IconButton>
                <BellIcon />
              </IconButton>
            </ButtonGroup>
            <Divider />
            <Avatar>
              <Avatar.Image src="https://github.com/shadcn.png" />
              <Avatar.Fallback>CN</Avatar.Fallback>
            </Avatar>
          </Box>
        </Level>
      </AppShell.Header>
      <AppShell.Sidebar>
        <Nav direction="vertical">
          <Nav.Link asChild>
            <Link href="/dental-app">Appointments</Link>
          </Nav.Link>
          <Nav.Link asChild>
            <Link href="/dental-app/patients">Patients</Link>
          </Nav.Link>
          <Nav.Link asChild>
            <Link href="/dental-app/doctors">Doctors</Link>
          </Nav.Link>
        </Nav>
      </AppShell.Sidebar>
      <AppShell.Main>
        <Box>
          <Level>
            <Box>
              <Heading>Patients appointments</Heading>
            </Box>
            <ButtonGroup>
              <Button>
                <CalendarIcon /> January 2025
              </Button>
              <Menu.Root>
                <Menu.Trigger asChild>
                  <Button>Add new appointment</Button>
                </Menu.Trigger>
                <Menu.Content>
                  <Menu.Item value="add-new-appointment">
                    Add new appointment
                  </Menu.Item>
                  <Menu.Item value="add-new-patient">Add new patient</Menu.Item>
                </Menu.Content>
              </Menu.Root>
            </ButtonGroup>
          </Level>
          <Grid columns={4}>
            <Grid.Item>
              <Card>
                <Card.Header>
                  <Heading>Appointment</Heading>
                </Card.Header>
              </Card>
            </Grid.Item>
            <Grid.Item>
              <Card>
                <Card.Header>
                  <Heading>Appointment</Heading>
                </Card.Header>
              </Card>
            </Grid.Item>
            <Grid.Item>
              <Card>
                <Card.Header>
                  <Heading>Appointment</Heading>
                </Card.Header>
              </Card>
            </Grid.Item>
            <Grid.Item>
              <Card>
                <Card.Header>
                  <Heading>Appointment</Heading>
                </Card.Header>
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
