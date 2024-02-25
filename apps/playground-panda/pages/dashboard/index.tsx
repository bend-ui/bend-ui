import Link from 'next/link';
import { Nav } from '@particles/ark';
import { css } from '@particles/styled-system/css';
import type { NextPage } from 'next';

const DashboardPage: NextPage = () => (
  <div className={css({ h: 'screen', display: 'flex', flexDirection: 'row' })}>
    <div className={css({ bgColor: 'bg.subtle', p: 'sm' })}>
      <h1>Dashboard</h1>
      <Nav direction="vertical">
        <Nav.Link asChild>
          <Link href="/dashboard/settings">Settings</Link>
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
      <div className={css({ p: 'sm' })}>Page header</div>
      <div className={css({ p: 'sm' })}>Page content</div>
    </div>
  </div>
);

export default DashboardPage;
