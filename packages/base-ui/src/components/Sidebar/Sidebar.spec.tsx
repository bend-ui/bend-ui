import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { afterEach, beforeEach, vi } from 'vitest';

import { Sidebar } from './Sidebar';

const mockViewport = (mobile: boolean) =>
  vi.spyOn(window, 'matchMedia').mockImplementation(
    (query) =>
      ({
        matches: mobile,
        media: query,
        addEventListener: () => undefined,
        removeEventListener: () => undefined,
      }) as unknown as MediaQueryList,
  );

describe('Sidebar', () => {
  beforeEach(() => {
    // jsdom has no matchMedia; define it so it can be spied on.
    window.matchMedia ??= (() => undefined) as never;
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('points the trigger at the id the root renders', () => {
    mockViewport(false);
    const { rerender } = render(
      <Sidebar.Provider>
        <Sidebar.Root aria-label="Navigation" />
        <Sidebar.Trigger />
      </Sidebar.Provider>,
    );
    const trigger = screen.getByRole('button', { name: 'Toggle sidebar' });
    const generated = trigger.getAttribute('aria-controls');
    expect(generated).toBeTruthy();
    expect(document.getElementById(generated as string)).not.toBeNull();

    rerender(
      <Sidebar.Provider>
        <Sidebar.Root id="navigation" aria-label="Navigation" />
        <Sidebar.Trigger />
      </Sidebar.Provider>,
    );
    expect(trigger.getAttribute('aria-controls')).toBe('navigation');
    expect(document.getElementById('navigation')).not.toBeNull();
  });

  it('moves focus past controls that cannot take it when the drawer opens', async () => {
    mockViewport(true);
    render(
      <Sidebar.Provider>
        <Sidebar.Root aria-label="Navigation">
          <input type="hidden" name="section" value="docs" />
          <button type="button" disabled>
            Disabled
          </button>
          <a href="/docs">Docs</a>
        </Sidebar.Root>
        <Sidebar.Trigger />
      </Sidebar.Provider>,
    );

    fireEvent.click(screen.getByRole('button', { name: 'Toggle sidebar' }));

    await waitFor(() =>
      expect(document.activeElement).toBe(
        screen.getByRole('link', { name: 'Docs' }),
      ),
    );
  });

  it('focuses the drawer itself when it holds nothing focusable', async () => {
    mockViewport(true);
    render(
      <Sidebar.Provider>
        <Sidebar.Root aria-label="Navigation">Empty</Sidebar.Root>
        <Sidebar.Trigger />
      </Sidebar.Provider>,
    );

    fireEvent.click(screen.getByRole('button', { name: 'Toggle sidebar' }));

    await waitFor(() =>
      expect(document.activeElement).toBe(
        screen.getByRole('complementary', { name: 'Navigation' }),
      ),
    );
  });
});
