'use client';

import { Button } from '@bend-ui/base-ui';
import { useState } from 'react';
/* playground:imports:start */
import type { ButtonState } from '../playground';
/* playground:imports:end */

/* playground:setup:start */
export default function ButtonExample({ state }: { state: ButtonState }) {
  /* playground:setup:end */
  const [saved, setSaved] = useState(false);
  return (
    <div>
      <Button
        variant="primary"
        size={state.size}
        disabled={state.disabled}
        style={{
          maxWidth: '100%',
          whiteSpace: 'normal',
          overflowWrap: 'anywhere',
        }}
        aria-label={state.label ? undefined : 'Button'}
        onClick={() => setSaved(true)}
      >
        {state.label}
      </Button>
      <p role="status">{saved ? 'Changes saved.' : 'Ready to save.'}</p>
    </div>
  );
}
