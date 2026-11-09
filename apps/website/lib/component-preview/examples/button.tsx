'use client';

import { Button } from '@bend-ui/base-ui';
import { useState } from 'react';

export default function ButtonExample() {
  const [saved, setSaved] = useState(false);
  return (
    <div>
      <Button variant="primary" onClick={() => setSaved(true)}>
        Save changes
      </Button>
      <p role="status">{saved ? 'Changes saved.' : 'Ready to save.'}</p>
    </div>
  );
}
