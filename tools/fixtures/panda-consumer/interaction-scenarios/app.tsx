import { useState } from 'react';
import { Button, Input, Menu } from '@bend-ui/base-ui';
// Copied to the isolated consumer's src/app; use its generated styles.
// eslint-disable-next-line @nx/enforce-module-boundaries
import { css } from '../../styled-system/css';

export default function App() {
  const [disabledActivations, setDisabledActivations] = useState(0);
  return (
    <main
      data-testid="proof"
      data-panda-theme="default"
      className={css({ bg: 'bg.page', color: 'text', padding: '8' })}
    >
      <button data-testid="start">Start keyboard navigation</button>
      {(['primary', 'secondary', 'tertiary', 'danger', 'inverse'] as const).map(
        (variant) => (
          <Button key={variant} variant={variant} data-testid={variant}>
            {variant}
          </Button>
        ),
      )}
      <Button variant="tertiary" disabled data-selected data-testid="disabled">
        Disabled
      </Button>
      <Button
        variant="secondary"
        aria-disabled="true"
        data-testid="aria-disabled"
      >
        ARIA disabled
      </Button>
      <Button variant="secondary" data-selected data-testid="selected">
        Selected
      </Button>
      <Button variant="primary" aria-pressed="true" data-testid="toggle">
        Toggle on
      </Button>
      <Input.Root data-testid="input-root">
        <Input.Wrapper>
          <Input.Input
            aria-label="Name"
            data-testid="input"
            placeholder="Name"
          />
        </Input.Wrapper>
      </Input.Root>
      <Input.Root data-testid="disabled-input-root">
        <Input.Wrapper>
          <Input.Input
            aria-label="Disabled name"
            disabled
            data-testid="disabled-input"
          />
        </Input.Wrapper>
      </Input.Root>
      <Input.Root data-testid="invalid-input-root">
        <Input.Wrapper>
          <Input.Input aria-label="Invalid name" aria-invalid="true" />
        </Input.Wrapper>
      </Input.Root>
      <Input.Root data-testid="readonly-input-root">
        <Input.Wrapper>
          <Input.Input
            aria-label="Read only name"
            readOnly
            defaultValue="Read only"
          />
        </Input.Wrapper>
      </Input.Root>
      <Input.Control
        aria-label="Standalone name"
        data-testid="standalone-input"
      />
      <section
        data-testid="raised"
        className={css({ layerStyle: 'surface.raised', padding: '6' })}
        tabIndex={0}
      >
        Raised surface
      </section>
      <section
        data-testid="overlay"
        className={css({ layerStyle: 'surface.overlay', padding: '6' })}
      >
        Overlay surface
        <div
          data-testid="translucent"
          className={css({ layerStyle: 'surface.translucent', padding: '6' })}
        >
          Translucent surface
        </div>
      </section>
      <output data-testid="disabled-activations">{disabledActivations}</output>
      <Menu.Root>
        <Menu.Trigger data-testid="menu-trigger">Actions</Menu.Trigger>
        <Menu.Portal>
          <Menu.Positioner>
            <Menu.Popup data-testid="menu">
              <Menu.Item data-testid="menu-first">First action</Menu.Item>
              <Menu.Item
                disabled
                data-testid="menu-disabled"
                onClick={() => setDisabledActivations((value) => value + 1)}
              >
                Unavailable action
              </Menu.Item>
              <Menu.CheckboxItem defaultChecked data-testid="menu-checked">
                Show details
                <Menu.CheckboxItemIndicator> ✓</Menu.CheckboxItemIndicator>
              </Menu.CheckboxItem>
              <Menu.Item data-testid="menu-last">Last action</Menu.Item>
            </Menu.Popup>
          </Menu.Positioner>
        </Menu.Portal>
      </Menu.Root>
    </main>
  );
}
