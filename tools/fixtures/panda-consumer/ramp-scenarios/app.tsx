import { Button, Input, Select } from '@bend-ui/base-ui';

export default function App() {
  return (
    <main style={{ maxWidth: 480, margin: '48px auto', padding: 24 }}>
      <h1>Generated OKLCH control proof</h1>
      <p>Brand-derived or independently tinted neutrals, in light and dark.</p>
      <div style={{ display: 'grid', gap: 24 }}>
        <Button data-testid="button" variant="primary">
          Save changes
        </Button>
        <Input.Root data-testid="input">
          <Input.Input aria-label="Name" defaultValue="Bend UI" />
        </Input.Root>
        <Select
          aria-label="Font"
          items={[
            { label: 'Sans-serif', value: 'sans' },
            { label: 'Serif', value: 'serif' },
          ]}
          defaultValue="serif"
        />
      </div>
    </main>
  );
}
