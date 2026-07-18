import Link from 'next/link';
import { Button, Card, Level, Nav } from '@bend-ui/ark-ui';
import { css } from '@bend-ui/styled-system/css';
import { Container } from '@bend-ui/styled-system/jsx';
import type { NextPage } from 'next';

const DashboardPage: NextPage = () => (
  <div className={css({ h: 'screen', display: 'flex', flexDirection: 'row' })}>
    <div className={css({ p: 'sm', minW: 'xs' })}>
      <h1>Ski resort</h1>
      <Nav direction="vertical">
        <Nav.Link asChild>
          <Link href="/dashboard/clients">Clients</Link>
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

export default DashboardPage;
