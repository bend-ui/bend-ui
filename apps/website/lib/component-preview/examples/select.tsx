'use client';

import { Select } from '@bend-ui/base-ui';

export default function SelectExample() {
  return (
    <Select.Root
      defaultValue="sans"
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
