'use client';

import { useId, useState } from 'react';
import { Select } from '@bend-ui/base-ui';

const options = Array.from({ length: 60 }, (_, index) => ({
  value: `workspace-${String(index + 1).padStart(2, '0')}`,
  label: `Workspace ${String(index + 1).padStart(2, '0')}`,
}));

/** Real compound Select with a bounded long list; inherits the Docs document theme. */
export function SelectReferenceExample() {
  const id = useId();
  const [value, setValue] = useState<string | null>('workspace-01');
  return (
    <section aria-label="Select example" style={{ display: 'grid', gap: 16 }}>
      <div
        style={{
          width: '100%',
          maxWidth: 360,
          padding: 16,
          background: 'var(--colors-bg)',
          color: 'var(--colors-text)',
        }}
      >
        <label htmlFor={id}>Workspace</label>
        <Select.Root
          items={options}
          value={value}
          onValueChange={setValue}
          size="md"
        >
          <Select.Trigger id={id}>
            <Select.Value />
            <Select.Icon aria-hidden="true">⌄</Select.Icon>
          </Select.Trigger>
          <Select.Portal>
            <Select.Positioner alignItemWithTrigger={false} sideOffset={8}>
              <Select.Popup>
                <Select.List>
                  {[options.slice(0, 30), options.slice(30)].map(
                    (group, index) => (
                      <Select.Group key={index}>
                        <Select.GroupLabel>
                          {index === 0
                            ? 'Active workspaces'
                            : 'More workspaces'}
                        </Select.GroupLabel>
                        {group.map((option) => (
                          <Select.Item
                            key={option.value}
                            value={option.value}
                            label={option.label}
                            disabled={option.value === 'workspace-03'}
                          >
                            <Select.ItemText>{option.label}</Select.ItemText>
                            <Select.ItemIndicator aria-hidden="true">
                              ✓
                            </Select.ItemIndicator>
                          </Select.Item>
                        ))}
                      </Select.Group>
                    ),
                  )}
                </Select.List>
              </Select.Popup>
            </Select.Positioner>
          </Select.Portal>
        </Select.Root>
      </div>
      <p role="status">
        Selected:{' '}
        {options.find((option) => option.value === value)?.label ?? 'None'}
      </p>
      <button type="button">Continue after Select</button>
    </section>
  );
}
