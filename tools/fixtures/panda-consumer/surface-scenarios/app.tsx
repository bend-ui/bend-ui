import { useState } from 'react';
import { Dialog, Popover, Surface, SurfaceProvider } from '@bend-ui/base-ui';

const surfaces = {
  page: {
    backgroundColor: 'var(--colors-proof-page)',
    color: 'var(--colors-proof-text)',
    borderColor: 'var(--colors-proof-stroke)',
    boxShadow: 'none',
  },
  raised: {
    backgroundColor: 'var(--colors-proof-raised)',
    color: 'var(--colors-proof-text)',
    borderColor: 'var(--colors-proof-stroke)',
    boxShadow: '0 2px 4px rgb(0 0 0 / 0.15)',
  },
  overlay: {
    backgroundColor: 'var(--colors-proof-overlay)',
    color: 'var(--colors-proof-text)',
    borderColor: 'var(--colors-proof-stroke)',
    boxShadow: '0 8px 24px rgb(0 0 0 / 0.25)',
  },
};

const popupStyle = {
  borderWidth: 1,
  borderStyle: 'solid' as const,
  padding: 12,
};

export default function App() {
  const [mode, setMode] = useState<'light' | 'dark'>('light');
  const [target, setTarget] = useState<HTMLDivElement | null>(null);
  return (
    <>
      <button data-testid="mode-light" onClick={() => setMode('light')}>
        Light
      </button>
      <button data-testid="mode-dark" onClick={() => setMode('dark')}>
        Dark
      </button>
      <div data-testid="portal-target" ref={setTarget} />
      <SurfaceProvider
        level="page"
        theme="surface-proof"
        colorMode={mode}
        surfaces={surfaces}
      >
        <Surface
          contextual
          surfaceLevel="page"
          data-testid="page"
          style={{ padding: 16 }}
        >
          Page surface
          <Surface
            contextual
            surfaceLevel="raised"
            data-testid="raised"
            style={{ padding: 12 }}
          >
            Raised surface
          </Surface>
          <Dialog.Root defaultOpen modal={false}>
            <Dialog.Trigger>Open dialog</Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Positioner>
                <Dialog.Popup
                  data-testid="dialog"
                  style={{ ...popupStyle, zIndex: 41 }}
                >
                  <Dialog.Title>Raised dialog</Dialog.Title>
                  <Dialog.Description>
                    Portalled from the page surface.
                  </Dialog.Description>
                  <Popover.Root defaultOpen>
                    <Popover.Trigger>Open popover</Popover.Trigger>
                    <Popover.Portal>
                      <Popover.Positioner>
                        <Popover.Popup
                          data-testid="popover"
                          style={{ ...popupStyle, zIndex: 73 }}
                        >
                          <Popover.Title>Overlay popover</Popover.Title>
                          <Popover.Description>
                            Portalled from the raised dialog.
                          </Popover.Description>
                        </Popover.Popup>
                      </Popover.Positioner>
                    </Popover.Portal>
                  </Popover.Root>
                  <Dialog.Root defaultOpen modal={false}>
                    <Dialog.Trigger>Open nested dialog</Dialog.Trigger>
                    <Dialog.Portal>
                      <Dialog.Positioner>
                        <Dialog.Popup
                          data-testid="nested-dialog"
                          style={popupStyle}
                        >
                          <Dialog.Title>Nested overlay dialog</Dialog.Title>
                          <Dialog.Description>
                            Logical depth is capped at overlay.
                          </Dialog.Description>
                        </Dialog.Popup>
                      </Dialog.Positioner>
                    </Dialog.Portal>
                  </Dialog.Root>
                </Dialog.Popup>
              </Dialog.Positioner>
            </Dialog.Portal>
          </Dialog.Root>
          <Dialog.Root defaultOpen modal={false}>
            <Dialog.Trigger>Open override</Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Positioner>
                <Dialog.Popup
                  data-testid="override"
                  surfaceLevel="page"
                  style={{
                    ...popupStyle,
                    backgroundColor: 'oklch(0.75 0 0)',
                    color: 'oklch(0.1 0 0)',
                    boxShadow: 'none',
                    zIndex: 91,
                  }}
                >
                  <Dialog.Title>Explicit override</Dialog.Title>
                  <Dialog.Description>
                    Appearance and level remain consumer-owned.
                  </Dialog.Description>
                </Dialog.Popup>
              </Dialog.Positioner>
            </Dialog.Portal>
          </Dialog.Root>
          {target && (
            <Dialog.Root defaultOpen modal={false}>
              <Dialog.Trigger>Open custom target</Dialog.Trigger>
              <Dialog.Portal container={target}>
                <Dialog.Positioner>
                  <Dialog.Popup data-testid="custom-popup" style={popupStyle}>
                    <Dialog.Title>Custom portal target</Dialog.Title>
                    <Dialog.Description>
                      The target is outside the provider DOM subtree.
                    </Dialog.Description>
                  </Dialog.Popup>
                </Dialog.Positioner>
              </Dialog.Portal>
            </Dialog.Root>
          )}
        </Surface>
      </SurfaceProvider>
    </>
  );
}
