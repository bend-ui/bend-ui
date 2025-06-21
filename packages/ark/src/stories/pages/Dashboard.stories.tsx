import { Meta } from '@storybook/react-vite';
import { css } from '@particles/styled-system/css';
import { Container, Grid, GridItem } from '@particles/styled-system/jsx';
import { AppShell, Button, Card, Level, Nav } from '../../components';

const meta: Meta = {
  title: 'Pages/Dashboard',
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['!autodocs'],
};

export default meta;

export const Dashboard = () => {
  return (
    <div
      className={css({ h: 'screen', display: 'flex', flexDirection: 'row' })}
    >
      <div className={css({ bgColor: 'bg.subtle', p: 'sm', minW: 'xs' })}>
        <h1>Ski resort</h1>
        <Nav direction="vertical">
          <Nav.Link asChild>
            <a href="/dashboard/clients">Clients</a>
          </Nav.Link>
          <Nav.Link asChild>
            <a href="/dashboard/profile">Profile</a>
          </Nav.Link>
        </Nav>
      </div>
      <div
        className={css({
          flexGrow: 1,
        })}
      >
        <div className={css({ p: 'lg' })}>
          <Level>
            <div>Dashboard</div>
            <div>
              <Button>Create new</Button>
            </div>
          </Level>
        </div>
        <div className={css({ p: 'lg' })}>
          <Container>
            <div>Common tools</div>
            <Card>Active clients</Card>
            <Card>Recent activities</Card>
            <div>Slopes state</div>
            <div>Weather conditions</div>
            <div>Ski lessons</div>
          </Container>
        </div>
      </div>
    </div>
  );
};

export const HRDashboard = () => {
  return (
    <AppShell>
      <AppShell.Sidebar>
        <div>Brand name</div>
        <Nav direction="vertical">
          <Nav.Link asChild>
            <a href="/">Home</a>
          </Nav.Link>
          <Nav.Link asChild>
            <a href="/dashboard/profile">My Profile</a>
          </Nav.Link>
          <Nav.Link asChild>
            <a href="/dashboard/time-off">Time off</a>
          </Nav.Link>
        </Nav>
      </AppShell.Sidebar>
      <AppShell.Main>
        <Level>
          <div>Overview</div>
          <div>
            <Button>Request time off</Button>
          </div>
        </Level>
        <section>
          <Grid columns={3}>
            <GridItem>
              <Card>
                <Card.Header>Annual Leave</Card.Header>
                <Card.Section>30 Days available</Card.Section>
              </Card>
            </GridItem>
            <GridItem>
              <Card>
                <Card.Header>Sick Leave</Card.Header>
                <Card.Section>15 Days available</Card.Section>
              </Card>
            </GridItem>
            <GridItem>
              <Card>
                <Card.Header>Casual Leave</Card.Header>
                <Card.Section>10 Days available</Card.Section>
              </Card>
            </GridItem>
          </Grid>
        </section>
        <section>
          <Grid columns={2}>
            <GridItem>
              <Card>
                <Card.Header>Work from home</Card.Header>
                <Card.Section>5 Days available</Card.Section>
              </Card>
            </GridItem>
            <GridItem>
              <Card>
                <Card.Header>Special Leave</Card.Header>
                <Card.Section>5 Days available</Card.Section>
              </Card>
            </GridItem>
          </Grid>
        </section>
        <section>
          <Grid columns={2}>
            <GridItem>
              <Card>
                <Card.Header>Work from home</Card.Header>
                <Card.Section>5 Days available</Card.Section>
              </Card>
            </GridItem>
            <GridItem>
              <Card>
                <Card.Header>Special Leave</Card.Header>
                <Card.Section>5 Days available</Card.Section>
              </Card>
            </GridItem>
          </Grid>
        </section>
      </AppShell.Main>
    </AppShell>
  );
};
