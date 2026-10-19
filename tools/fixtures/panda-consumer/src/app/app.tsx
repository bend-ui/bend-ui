import { useState } from 'react';
import { Button, Card, Heading, Text } from '@bend-ui/base-ui';
import { css } from '@bend-ui/base-ui/css';

export default function App() {
  const [saved, setSaved] = useState(false);
  return (
    <main className={css({ maxWidth: 'xl', margin: 'auto', padding: '8' })}>
      <Card.Root>
        <Card.Body>
          <Heading>Published package consumer</Heading>
          <Text>
            Local purple brand and 19px corners, with Bend UI recipes.
          </Text>
          <Button variant="primary" size="lg" onClick={() => setSaved(true)}>
            {saved ? 'Saved' : 'Save changes'}
          </Button>
          <p role="status">{saved ? 'Changes saved.' : 'Ready to save.'}</p>
        </Card.Body>
      </Card.Root>
    </main>
  );
}
