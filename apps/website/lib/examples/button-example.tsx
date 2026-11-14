'use client';

import { Button, IconButton } from '@bend-ui/base-ui';
import { useState } from 'react';

const Plus = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    aria-hidden="true"
  >
    <path d="M12 5v14M5 12h14" />
  </svg>
);

export function ButtonReferenceExample() {
  const [actions, setActions] = useState(0);
  const activate = () => setActions((value) => value + 1);
  return (
    <section
      aria-label="Button reference example"
      style={{ display: 'grid', gap: 16 }}
    >
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          gap: 12,
        }}
      >
        <Button variant="primary" onClick={activate}>
          Save changes
        </Button>
        <Button variant="secondary" onClick={activate}>
          Preview changes
        </Button>
        <Button variant="tertiary" onClick={() => setActions(0)}>
          Reset count
        </Button>
        <Button variant="danger" onClick={activate}>
          Delete draft
        </Button>
        <Button variant="inverse" onClick={activate}>
          Inverse action
        </Button>
      </div>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          gap: 12,
        }}
      >
        <Button size="sm" onClick={activate}>
          Small action
        </Button>
        <Button size="md" onClick={activate}>
          Medium action
        </Button>
        <Button size="lg" onClick={activate}>
          Large action
        </Button>
        <IconButton icon={<Plus />} onClick={activate}>
          Add item
        </IconButton>
        <IconButton icon={<Plus />} isDisabled onClick={activate}>
          Unavailable icon action
        </IconButton>
      </div>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          gap: 12,
        }}
      >
        <Button isDisabled onClick={activate}>
          Unavailable action
        </Button>
        <Button isLoading disabled>
          Saving changes
        </Button>
        <Button render={<span />} nativeButton={false} onClick={activate}>
          Composed action
        </Button>
      </div>
      <p id="button-reference-result" role="status">
        Actions completed: {actions}
      </p>
    </section>
  );
}
