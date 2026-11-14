'use client';

import { useRef, useState, type CSSProperties } from 'react';
import { Button, Dialog, SurfaceProvider } from '@bend-ui/base-ui';

// Deliberately distinct surfaces make the logical nesting visible in both modes.
const appearances = {
  light: { raised: '#ebebeb', overlay: '#dbdbdb', text: '#202020' },
  dark: { raised: '#262626', overlay: '#363636', text: '#fafafa' },
};
const popupStyle: CSSProperties = { display: 'grid', gap: 16 };
const titleStyle: CSSProperties = { paddingRight: 40 };
const closeStyle: CSSProperties = {
  width: 32,
  height: 32,
  maxWidth: 'none',
  padding: 0,
};
const inputStyle: CSSProperties = {
  display: 'block',
  width: '100%',
  minWidth: 0,
  padding: 8,
  border: '1px solid currentColor',
  borderRadius: 4,
  background: 'transparent',
  color: 'inherit',
  font: 'inherit',
};

/** A real component example, shared by the Docs page and its browser proof. */
export function DialogReferenceExample() {
  const [mode, setMode] = useState<'light' | 'dark'>('light');
  const initialFocus = useRef<HTMLInputElement>(null);
  const colors = appearances[mode];
  return (
    <section aria-label="Dialog example" style={{ display: 'grid', gap: 16 }}>
      <label>
        Preview color mode{' '}
        <select
          value={mode}
          onChange={(event) => setMode(event.target.value as 'light' | 'dark')}
        >
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </label>
      <SurfaceProvider
        level="page"
        colorMode={mode}
        surfaces={{
          raised: {
            backgroundColor: colors.raised,
            color: colors.text,
            borderColor: colors.text,
            boxShadow: '0 4px 16px rgb(0 0 0 / 0.2)',
          },
          overlay: {
            backgroundColor: colors.overlay,
            color: colors.text,
            borderColor: colors.text,
            boxShadow: '0 12px 32px rgb(0 0 0 / 0.35)',
          },
        }}
      >
        <Dialog.Root>
          <Dialog.Trigger>Open preferences</Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Backdrop />
            <Dialog.Positioner>
              <Dialog.Popup initialFocus={initialFocus} style={popupStyle}>
                <Dialog.Title style={titleStyle}>Preferences</Dialog.Title>
                <Dialog.Description>
                  Update your display name or review sharing preferences.
                </Dialog.Description>
                <label>
                  Display name
                  <input
                    ref={initialFocus}
                    defaultValue="Alex Morgan"
                    style={inputStyle}
                  />
                </label>
                <Dialog.Root>
                  <Dialog.Trigger>Review sharing</Dialog.Trigger>
                  <Dialog.Portal>
                    <Dialog.Backdrop />
                    <Dialog.Positioner>
                      <Dialog.Popup style={popupStyle}>
                        <Dialog.Title style={titleStyle}>
                          Sharing preferences
                        </Dialog.Title>
                        <Dialog.Description>
                          This second dialog is an overlay surface. Close it to
                          return to Preferences.
                        </Dialog.Description>
                        <p>Your display name is visible to your team.</p>
                        <Dialog.Close
                          aria-label="Close sharing"
                          style={closeStyle}
                          render={<Button size="sm" />}
                        >
                          <span aria-hidden="true">×</span>
                        </Dialog.Close>
                      </Dialog.Popup>
                    </Dialog.Positioner>
                  </Dialog.Portal>
                </Dialog.Root>
                <Dialog.Close
                  aria-label="Close preferences"
                  style={closeStyle}
                  render={<Button size="sm" />}
                >
                  <span aria-hidden="true">×</span>
                </Dialog.Close>
              </Dialog.Popup>
            </Dialog.Positioner>
          </Dialog.Portal>
        </Dialog.Root>
      </SurfaceProvider>
    </section>
  );
}
