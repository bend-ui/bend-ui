'use client';

import { Select } from '@bend-ui/base-ui';
/* playground:imports:start */
import type { SelectState } from '../playground';
/* playground:imports:end */

/* playground:setup:start */
export default function SelectExample({
  state,
  onValueChange,
}: {
  state: SelectState;
  onValueChange: (value: SelectState['value']) => void;
}) {
  /* playground:setup:end */
  return (
    <Select.Root
      value={state.value}
      onValueChange={(value) => {
        if (value === 'sans' || value === 'serif' || value === 'mono')
          onValueChange(value);
      }}
      size={state.size}
      disabled={state.disabled}
      items={{ sans: 'Sans-serif', serif: 'Serif', mono: 'Monospace' }}
    >
      <Select.Control>
        <Select.Trigger aria-label="Font family">
          <Select.Value />
          <Select.Icon aria-hidden="true"> ▾</Select.Icon>
        </Select.Trigger>
      </Select.Control>
      <Select.Portal>
        <Select.Positioner sideOffset={8} collisionPadding={8}>
          <Select.Popup>
            <Select.List>
              <Select.Item value="sans">
                <Select.ItemText>Sans-serif</Select.ItemText>
              </Select.Item>
              <Select.Item value="serif">
                <Select.ItemText>Serif</Select.ItemText>
              </Select.Item>
              <Select.Item value="mono">
                <Select.ItemText>Monospace</Select.ItemText>
              </Select.Item>
            </Select.List>
          </Select.Popup>
        </Select.Positioner>
      </Select.Portal>
    </Select.Root>
  );
}
