import { Meta } from '@storybook/react-vite';
import { css } from '@bend-ui/styled-system/css';
import { Container, Grid, GridItem, styled } from '@bend-ui/styled-system/jsx';
import { AppShell, Button } from '../../components';

const CardRoot = styled('div', {
  base: { layerStyle: 'panel', p: 'lg', rounded: '2xl' },
});
const CardSection = styled('div');
const Card = Object.assign(CardRoot, { Section: CardSection });
const Level = styled('div', {
  base: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
const Nav = styled('nav', {
  base: { display: 'flex', flexDirection: 'column' },
});

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
      <div className={css({ p: 'sm', minW: 'xs' })}>
        <h1>Ski resort</h1>
        <Nav>
          <a href="/dashboard/clients">Clients</a>
          <a href="/dashboard/profile">Profile</a>
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
        <Nav>
          <a href="/">Home</a>
          <a href="/dashboard/profile">My Profile</a>
          <a href="/dashboard/time-off">Time off</a>
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
                <Card.Section>Annual Leave</Card.Section>
                <Card.Section>30 Days available</Card.Section>
              </Card>
            </GridItem>
            <GridItem>
              <Card>
                <Card.Section>Sick Leave</Card.Section>
                <Card.Section>15 Days available</Card.Section>
              </Card>
            </GridItem>
            <GridItem>
              <Card>
                <Card.Section>Casual Leave</Card.Section>
                <Card.Section>10 Days available</Card.Section>
              </Card>
            </GridItem>
          </Grid>
        </section>
        <section>
          <Grid columns={2}>
            <GridItem>
              <Card>
                <Card.Section>Work from home</Card.Section>
                <Card.Section>5 Days available</Card.Section>
              </Card>
            </GridItem>
            <GridItem>
              <Card>
                <Card.Section>Special Leave</Card.Section>
                <Card.Section>5 Days available</Card.Section>
              </Card>
            </GridItem>
          </Grid>
        </section>
        <section>
          <Grid columns={2}>
            <GridItem>
              <Card>
                <Card.Section>Work from home</Card.Section>
                <Card.Section>5 Days available</Card.Section>
              </Card>
            </GridItem>
            <GridItem>
              <Card>
                <Card.Section>Special Leave</Card.Section>
                <Card.Section>5 Days available</Card.Section>
              </Card>
            </GridItem>
          </Grid>
        </section>
      </AppShell.Main>
    </AppShell>
  );
};
