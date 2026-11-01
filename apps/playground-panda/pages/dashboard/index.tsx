import Link from 'next/link';
import { Button } from '@bend-ui/ark-ui';
import { Card, Stack } from '@bend-ui/base-ui';
import { css } from '@bend-ui/styled-system/css';
import { Container } from '@bend-ui/styled-system/jsx';
import type { NextPage } from 'next';

const DashboardPage: NextPage = () => (
  <div className={css({ h: 'screen', display: 'flex', flexDirection: 'row' })}>
    <div className={css({ p: 'sm', minW: 'xs' })}>
      <h1>Ski resort</h1>
      <nav aria-label="Dashboard">
        <Link href="/dashboard/clients">Clients</Link>
        <a href="/dashboard/profile">Profile</a>
      </nav>
    </div>
    <div
      className={css({
        flexGrow: 1,
      })}
    >
      <div className={css({ p: 'lg' })}>
        <Stack direction="row" align="center" justify="space-between">
          <div>Dashboard</div>
          <div>
            <Button>Create new</Button>
          </div>
        </Stack>
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
