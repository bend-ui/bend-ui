import Link from 'next/link';
import { center, container, grid } from '@particles/styled-system/patterns';
import { Card, Heading, Paragraph } from '@particles/ark';

export function Index() {
  return (
    <div className={container({ h: 'screen' })}>
      <div className={center({ h: 'full' })}>
        <div className={grid({ columns: 3, gap: '6' })}>
          <Link href="/music">
            <Card>
              <Heading variant="title">Music Player</Heading>
              <Paragraph variant="body">
                A music player with a playlist
              </Paragraph>
            </Card>
          </Link>
          <Link href="/dashboard">
            <Card>
              <Heading variant="title">Dashboard</Heading>
              <Paragraph variant="body">A dashboard with widgets</Paragraph>
            </Card>
          </Link>
          <Link href="/marketing">
            <Card>
              <Heading variant="title">Marketing website</Heading>
              <Paragraph variant="body">A marketing page with a form</Paragraph>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Index;
