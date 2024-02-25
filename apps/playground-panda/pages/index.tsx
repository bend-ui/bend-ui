import Link from 'next/link';
import { container, grid } from '@particles/styled-system/patterns';
import { Card } from '@particles/ark';

export function Index() {
  return (
    <div className={container()}>
      <div className={grid({ columns: 3, gap: '6' })}>
        <Card>Music Player</Card>
        <Link href="/dashboard">
          <Card>Dashboard</Card>
        </Link>
      </div>
    </div>
  );
}

export default Index;
