import { container, grid } from '@particles/styled-system/patterns';
import { Card } from '@particles/react';

export function Index() {
  return (
    <div className={container()}>
      <div className={grid({ columns: 3, gap: '6' })}>
        <Card>Music Player</Card>
        <Card>Dashboard</Card>
      </div>
    </div>
  );
}

export default Index;
