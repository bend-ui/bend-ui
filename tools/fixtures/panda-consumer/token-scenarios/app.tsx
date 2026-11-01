import { Button, Input, Select } from '@bend-ui/base-ui';

export default function App() {
  return (
    <main>
      <Button data-testid="button" variant="primary">
        Save
      </Button>
      <Input.Root data-testid="input">
        <Input.Input aria-label="Name" />
      </Input.Root>
      <Select defaultValue="serif" />
    </main>
  );
}
