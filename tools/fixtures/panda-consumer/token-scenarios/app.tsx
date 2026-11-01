import { Button, Input, Select } from '@bend-ui/base-ui';
// Copied to the isolated consumer's src/app; this imports its generated recipes.
// eslint-disable-next-line @nx/enforce-module-boundaries
import { textarea } from '../../styled-system/recipes';

function DangerControls({ scope }: { scope: string }) {
  const classes = textarea();
  return (
    <div data-testid={scope}>
      <Button data-testid={`${scope}-danger`} variant="danger">
        Delete
      </Button>
      <div className={classes.root} data-testid={`${scope}-textarea`}>
        <textarea
          className={classes.field}
          data-invalid
          aria-label={`${scope} reason`}
        />
      </div>
      <span
        data-testid={`${scope}-legacy`}
        style={{ color: 'var(--colors-error)' }}
      >
        Legacy error
      </span>
    </div>
  );
}

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
      <DangerControls scope="default" />
      <section data-panda-theme="error-proof">
        <DangerControls scope="nested" />
      </section>
      <section data-panda-theme="danger-default-proof">
        <DangerControls scope="override" />
      </section>
    </main>
  );
}
