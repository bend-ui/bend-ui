import { useState } from 'react';
import { Button, Card, Input, Select } from '@bend-ui/base-ui';

export default function App() {
  const [value, setValue] = useState('standard');
  const [saved, setSaved] = useState(false);
  return (
    <main style={{ maxWidth: 480, margin: '24px auto', padding: 16 }}>
      <Card.Root>
        <Card.Header>
          <Card.Title>Delivery preferences</Card.Title>
        </Card.Header>
        <Card.Section>
          <Card.Body>
            <label htmlFor="collection-name">Name</label>
            <Input id="collection-name" />
            <p id="delivery-label">Delivery</p>
            <Select.Root
              value={value}
              items={{ standard: 'Standard', express: 'Express' }}
              onValueChange={(next) => {
                if (next) setValue(next);
              }}
            >
              <Select.Control>
                <Select.Trigger aria-labelledby="delivery-label">
                  <Select.Value />
                  <Select.Icon>⌄</Select.Icon>
                </Select.Trigger>
              </Select.Control>
              <Select.Portal>
                <Select.Positioner sideOffset={4}>
                  <Select.Popup>
                    <Select.List>
                      <Select.Item value="standard">
                        <Select.ItemText>Standard</Select.ItemText>
                        <Select.ItemIndicator>✓</Select.ItemIndicator>
                      </Select.Item>
                      <Select.Item value="express">
                        <Select.ItemText>Express</Select.ItemText>
                        <Select.ItemIndicator>✓</Select.ItemIndicator>
                      </Select.Item>
                    </Select.List>
                  </Select.Popup>
                </Select.Positioner>
              </Select.Portal>
            </Select.Root>
          </Card.Body>
        </Card.Section>
        <Card.Footer>
          <Button variant="primary" onClick={() => setSaved(true)}>
            Save preferences
          </Button>
          <p role="status">{saved ? 'Saved' : 'Ready'}</p>
        </Card.Footer>
      </Card.Root>
    </main>
  );
}
