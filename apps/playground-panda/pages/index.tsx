import { useEffect, useState } from 'react';
import Link from 'next/link';
import { center, container, grid } from '@bend-ui/styled-system/patterns';
import { Button, ButtonGroup, Card, Heading, Paragraph } from '@bend-ui/ark-ui';

export function Index() {
  const [theme, setTheme] = useState('quark');

  useEffect(() => {
    document.documentElement.setAttribute('data-panda-theme', theme);
  }, [theme]);

  return (
    <div className={container({ h: 'screen' })}>
      <ButtonGroup>
        <Button onClick={() => setTheme('quark')}>Quark</Button>
        <Button onClick={() => setTheme('neutron')}>Neutron</Button>
        <Button onClick={() => setTheme('proton')}>Proton</Button>
      </ButtonGroup>
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
          <Link href="/dental-app">
            <Card>
              <Heading variant="title">Dental App</Heading>
              <Paragraph variant="body">A dental app with widgets</Paragraph>
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
