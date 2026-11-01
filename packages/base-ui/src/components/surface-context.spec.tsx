import { act, createRef } from 'react';
import { hydrateRoot, type Root } from 'react-dom/client';
import { renderToString } from 'react-dom/server';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { SurfaceProvider } from './SurfaceContext/SurfaceContext';
import { Surface } from './Patterns';
import { Dialog } from './Dialog';
import { Popover } from './Popover';

const appearances = {
  page: { backgroundColor: 'rgb(240, 240, 240)', color: 'rgb(20, 20, 20)' },
  raised: {
    backgroundColor: 'rgb(220, 220, 220)',
    boxShadow: '0 2px 4px black',
  },
  overlay: {
    backgroundColor: 'rgb(200, 200, 200)',
    borderColor: 'rgb(40, 40, 40)',
  },
};

describe('contextual surface scope', () => {
  it('keeps context opt-in and propagates an explicitly selected surface to descendants', () => {
    render(
      <>
        <Surface data-testid="plain">Legacy</Surface>
        <SurfaceProvider surfaces={appearances}>
          <Surface contextual surfaceLevel="raised" data-testid="raised">
            <Surface contextual data-testid="inherited">
              Inherited
            </Surface>
          </Surface>
        </SurfaceProvider>
      </>,
    );
    expect(screen.getByTestId('plain').style.backgroundColor).toBe('');
    expect(screen.getByTestId('raised').style.backgroundColor).toBe(
      'rgb(220, 220, 220)',
    );
    expect(screen.getByTestId('inherited').style.backgroundColor).toBe(
      'rgb(200, 200, 200)',
    );
  });

  it('caps nested contextual depth at overlay without changing a legacy popup', async () => {
    render(
      <>
        <SurfaceProvider level="overlay" surfaces={appearances}>
          <Surface contextual data-testid="capped">
            Capped
          </Surface>
        </SurfaceProvider>
        <Dialog.Root defaultOpen modal={false}>
          <Dialog.Portal>
            <Dialog.Popup data-testid="legacy-popup">
              <Dialog.Title>Legacy dialog</Dialog.Title>
              <Dialog.Description>Opt-in remains required</Dialog.Description>
            </Dialog.Popup>
          </Dialog.Portal>
        </Dialog.Root>
      </>,
    );
    expect(
      screen.getByTestId('capped').getAttribute('data-surface-level'),
    ).toBe('overlay');
    const popup = await screen.findByTestId('legacy-popup');
    expect(popup.hasAttribute('data-surface-level')).toBe(false);
    expect(popup.style.backgroundColor).toBe('');
  });

  it('composes Base UI state-based class and style callbacks', async () => {
    render(
      <>
        <Dialog.Root defaultOpen modal={false}>
          <Dialog.Portal>
            <Dialog.Popup
              data-testid="legacy-callback-popup"
              className={() => 'legacy-state'}
              style={() => ({ color: 'rgb(6, 5, 4)' })}
            >
              <Dialog.Title>Legacy callback dialog</Dialog.Title>
              <Dialog.Description>
                State callbacks without context
              </Dialog.Description>
            </Dialog.Popup>
          </Dialog.Portal>
        </Dialog.Root>
        <SurfaceProvider colorMode="dark" surfaces={appearances}>
          <Dialog.Root defaultOpen modal={false}>
            <Dialog.Portal>
              <Dialog.Popup
                data-testid="callback-popup"
                className={() => 'from-state'}
                style={() => ({ color: 'rgb(9, 8, 7)' })}
              >
                <Dialog.Title>Callback dialog</Dialog.Title>
                <Dialog.Description>
                  State callback composition
                </Dialog.Description>
              </Dialog.Popup>
            </Dialog.Portal>
          </Dialog.Root>
        </SurfaceProvider>
      </>,
    );
    const legacyPopup = await screen.findByTestId('legacy-callback-popup');
    expect(legacyPopup.classList.contains('legacy-state')).toBe(true);
    expect(legacyPopup.style.color).toBe('rgb(6, 5, 4)');
    expect(legacyPopup.hasAttribute('data-surface-level')).toBe(false);
    const popup = await screen.findByTestId('callback-popup');
    expect(popup.classList.contains('from-state')).toBe(true);
    expect(popup.classList.contains('dark')).toBe(true);
    expect(popup.style.color).toBe('rgb(9, 8, 7)');
    expect(popup.style.backgroundColor).toBe('rgb(220, 220, 220)');
  });

  it('bridges logical scope through a body portal and advances nested popovers without assigning z-index', async () => {
    const ref = createRef<HTMLDivElement>();
    const { container } = render(
      <SurfaceProvider surfaces={appearances} theme="proof" colorMode="dark">
        <Dialog.Root defaultOpen modal={false}>
          <Dialog.Portal>
            <Dialog.Popup ref={ref} data-testid="dialog">
              <Dialog.Title>Surface dialog</Dialog.Title>
              <Dialog.Description>Nested surface proof</Dialog.Description>
              <Popover.Root defaultOpen>
                <Popover.Trigger>Inspect</Popover.Trigger>
                <Popover.Portal>
                  <Popover.Positioner>
                    <Popover.Popup data-testid="popover">
                      <Popover.Title>Surface popover</Popover.Title>
                      <Popover.Description>
                        Raised overlay proof
                      </Popover.Description>
                    </Popover.Popup>
                  </Popover.Positioner>
                </Popover.Portal>
              </Popover.Root>
            </Dialog.Popup>
          </Dialog.Portal>
        </Dialog.Root>
      </SurfaceProvider>,
    );
    const dialog = await screen.findByTestId('dialog');
    const popover = await screen.findByTestId('popover');
    expect(container.contains(dialog)).toBe(false);
    expect(container.contains(popover)).toBe(false);
    expect(ref.current).toBe(dialog);
    expect(dialog.style.backgroundColor).toBe('rgb(220, 220, 220)');
    expect(popover.style.backgroundColor).toBe('rgb(200, 200, 200)');
    expect(dialog.style.zIndex).toBe('');
    expect(popover.style.zIndex).toBe('');
    expect(dialog.getAttribute('data-panda-theme')).toBe('proof');
    expect(popover.getAttribute('data-panda-theme')).toBe('proof');
    expect(dialog.classList.contains('dark')).toBe(true);
  });

  it('preserves consumer styles and explicit levels in a custom portal container', async () => {
    const target = document.createElement('div');
    document.body.append(target);
    const onClick = vi.fn();
    try {
      render(
        <SurfaceProvider level="overlay" surfaces={appearances}>
          <Dialog.Root defaultOpen modal={false}>
            <Dialog.Portal container={target}>
              <Dialog.Popup
                surfaceLevel="page"
                data-testid="override"
                className="consumer"
                style={{ backgroundColor: 'rgb(1, 2, 3)', zIndex: 91 }}
                onClick={onClick}
              >
                <Dialog.Title>Override dialog</Dialog.Title>
                <Dialog.Description>Explicit override</Dialog.Description>
              </Dialog.Popup>
            </Dialog.Portal>
          </Dialog.Root>
        </SurfaceProvider>,
      );
      const popup = await screen.findByTestId('override');
      expect(target.contains(popup)).toBe(true);
      expect(popup.style.backgroundColor).toBe('rgb(1, 2, 3)');
      expect(popup.style.zIndex).toBe('91');
      expect(popup.classList.contains('consumer')).toBe(true);
      expect(popup.hasAttribute('surfaceLevel')).toBe(false);
      fireEvent.click(popup);
      expect(onClick).toHaveBeenCalledOnce();
    } finally {
      target.remove();
    }
  });

  it('merges nested appearance overrides and updates portal appearance when context changes', async () => {
    const tree = (color: string) => (
      <SurfaceProvider surfaces={appearances}>
        <SurfaceProvider surfaces={{ raised: { backgroundColor: color } }}>
          <Dialog.Root defaultOpen modal={false}>
            <Dialog.Portal>
              <Dialog.Popup data-testid="dynamic">
                <Dialog.Title>Dynamic dialog</Dialog.Title>
                <Dialog.Description>Updated context</Dialog.Description>
              </Dialog.Popup>
            </Dialog.Portal>
          </Dialog.Root>
        </SurfaceProvider>
      </SurfaceProvider>
    );
    const { rerender } = render(tree('rgb(4, 5, 6)'));
    const popup = await screen.findByTestId('dynamic');
    expect(popup.style.boxShadow).toBe('0 2px 4px black');
    rerender(tree('rgb(7, 8, 9)'));
    await waitFor(() =>
      expect(popup.style.backgroundColor).toBe('rgb(7, 8, 9)'),
    );
  });

  it('hydrates server markup and mounts an open portal without recoverable mismatches', async () => {
    const tree = (
      <SurfaceProvider surfaces={appearances} theme="proof" colorMode="dark">
        <Surface contextual surfaceLevel="page">
          Hydrated surface
        </Surface>
        <Dialog.Root defaultOpen modal={false}>
          <Dialog.Portal>
            <Dialog.Popup data-testid="hydrated-popup">
              <Dialog.Title>Hydrated dialog</Dialog.Title>
              <Dialog.Description>Portal after hydration</Dialog.Description>
            </Dialog.Popup>
          </Dialog.Portal>
        </Dialog.Root>
      </SurfaceProvider>
    );
    const host = document.createElement('div');
    host.innerHTML = renderToString(tree);
    document.body.append(host);
    const onRecoverableError = vi.fn();
    let root: Root | undefined;
    try {
      await act(async () => {
        root = hydrateRoot(host, tree, { onRecoverableError });
      });
      const popup = await screen.findByTestId('hydrated-popup');
      expect(host.contains(popup)).toBe(false);
      expect(popup.style.backgroundColor).toBe('rgb(220, 220, 220)');
      expect(onRecoverableError).not.toHaveBeenCalled();
    } finally {
      await act(async () => root?.unmount());
      host.remove();
    }
  });

  it('renders the contextual surface deterministically on the server without rendering portal content', () => {
    const markup = () =>
      renderToString(
        <SurfaceProvider surfaces={appearances} theme="proof" colorMode="dark">
          <Surface contextual surfaceLevel="overlay">
            Server surface
          </Surface>
          <Dialog.Root defaultOpen>
            <Dialog.Portal>
              <Dialog.Popup>
                <Dialog.Title>Portalled title</Dialog.Title>
              </Dialog.Popup>
            </Dialog.Portal>
          </Dialog.Root>
        </SurfaceProvider>,
      );
    expect(markup()).toBe(markup());
    expect(markup()).toContain('Server surface');
    expect(markup()).toContain('rgb(200, 200, 200)');
    expect(markup()).not.toContain('Portalled title');
  });
});
