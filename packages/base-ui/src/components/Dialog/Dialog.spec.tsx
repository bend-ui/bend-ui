import { createRef, useState } from 'react';
import {
  fireEvent,
  render,
  screen,
  waitFor,
  within,
} from '@testing-library/react';
import { Dialog } from './Dialog';
import { SurfaceProvider } from '../SurfaceContext/SurfaceContext';

const pressEscape = () =>
  fireEvent.keyDown(document.activeElement ?? document.body, {
    key: 'Escape',
    code: 'Escape',
  });

describe('reference Dialog interactions', () => {
  it('names the modal, forwards initial focus and restores the trigger after Escape', async () => {
    const initialFocus = createRef<HTMLInputElement>();
    const onOpenChange = vi.fn();
    const { container } = render(
      <Dialog.Root onOpenChange={onOpenChange} size="sm">
        <Dialog.Trigger>Open preferences</Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Backdrop />
          <Dialog.Positioner>
            <Dialog.Popup initialFocus={initialFocus}>
              <Dialog.Title>Preferences</Dialog.Title>
              <Dialog.Description>Choose your display name.</Dialog.Description>
              <label>
                Display name
                <input ref={initialFocus} />
              </label>
              <Dialog.Close>Close preferences</Dialog.Close>
            </Dialog.Popup>
          </Dialog.Positioner>
        </Dialog.Portal>
      </Dialog.Root>,
    );
    const trigger = screen.getByRole('button', { name: 'Open preferences' });
    trigger.focus();
    fireEvent.click(trigger);
    const popup = await screen.findByRole('dialog', { name: 'Preferences' });
    expect(container.contains(popup)).toBe(false);
    expect(popup.getAttribute('aria-describedby')).toBe(
      screen.getByText('Choose your display name.').id,
    );
    await waitFor(() =>
      expect(document.activeElement).toBe(initialFocus.current),
    );
    pressEscape();
    await waitFor(() => expect(screen.queryByRole('dialog')).toBeNull());
    await waitFor(() => expect(document.activeElement).toBe(trigger));
    expect(
      onOpenChange.mock.calls.map(([open, details]) => [open, details.reason]),
    ).toEqual([
      [true, 'trigger-press'],
      [false, 'escape-key'],
    ]);
  });

  it('keeps a controlled modal open after outside press when requested, but permits Close and finalFocus', async () => {
    const finalFocus = createRef<HTMLButtonElement>();
    function ControlledDialog() {
      const [open, setOpen] = useState(false);
      return (
        <>
          <button ref={finalFocus}>After dialog</button>
          <Dialog.Root
            open={open}
            onOpenChange={setOpen}
            disablePointerDismissal
          >
            <Dialog.Trigger>Open controlled dialog</Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Backdrop data-testid="controlled-backdrop" />
              <Dialog.Positioner>
                <Dialog.Popup finalFocus={finalFocus}>
                  <Dialog.Title>Controlled settings</Dialog.Title>
                  <Dialog.Description>
                    Close this dialog explicitly.
                  </Dialog.Description>
                  <Dialog.Close>Done</Dialog.Close>
                </Dialog.Popup>
              </Dialog.Positioner>
            </Dialog.Portal>
          </Dialog.Root>
        </>
      );
    }
    render(<ControlledDialog />);
    fireEvent.click(
      screen.getByRole('button', { name: 'Open controlled dialog' }),
    );
    const popup = await screen.findByRole('dialog', {
      name: 'Controlled settings',
    });
    fireEvent.pointerDown(screen.getByTestId('controlled-backdrop'));
    fireEvent.pointerUp(screen.getByTestId('controlled-backdrop'));
    fireEvent.click(screen.getByTestId('controlled-backdrop'));
    expect(screen.getByRole('dialog', { name: 'Controlled settings' })).toBe(
      popup,
    );
    fireEvent.click(within(popup).getByRole('button', { name: 'Done' }));
    await waitFor(() => expect(screen.queryByRole('dialog')).toBeNull());
    await waitFor(() =>
      expect(document.activeElement).toBe(finalFocus.current),
    );
  });

  it.each(['light', 'dark'] as const)(
    'dismisses only the top nested modal and restores parent focus in %s mode',
    async (colorMode) => {
      render(
        <SurfaceProvider level="page" colorMode={colorMode}>
          <Dialog.Root>
            <Dialog.Trigger>Open outer dialog</Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Positioner>
                <Dialog.Popup data-testid="outer">
                  <Dialog.Title>Outer settings</Dialog.Title>
                  <Dialog.Description>Parent preferences.</Dialog.Description>
                  <Dialog.Root>
                    <Dialog.Trigger>Open nested dialog</Dialog.Trigger>
                    <Dialog.Portal>
                      <Dialog.Positioner>
                        <Dialog.Popup>
                          <Dialog.Title>Nested settings</Dialog.Title>
                          <Dialog.Description>
                            Nested preferences.
                          </Dialog.Description>
                          <Dialog.Close>Close nested dialog</Dialog.Close>
                        </Dialog.Popup>
                      </Dialog.Positioner>
                    </Dialog.Portal>
                  </Dialog.Root>
                  <Dialog.Close>Close outer dialog</Dialog.Close>
                </Dialog.Popup>
              </Dialog.Positioner>
            </Dialog.Portal>
          </Dialog.Root>
        </SurfaceProvider>,
      );
      const outerTrigger = screen.getByRole('button', {
        name: 'Open outer dialog',
      });
      fireEvent.click(outerTrigger);
      const outer = await screen.findByRole('dialog', {
        name: 'Outer settings',
      });
      const nestedTrigger = within(outer).getByRole('button', {
        name: 'Open nested dialog',
      });
      fireEvent.click(nestedTrigger);
      const nested = await screen.findByRole('dialog', {
        name: 'Nested settings',
      });
      expect(outer.getAttribute('data-surface-level')).toBe('raised');
      expect(nested.getAttribute('data-surface-level')).toBe('overlay');
      expect(nested.classList.contains(colorMode)).toBe(true);
      expect(outer.contains(nested)).toBe(false);
      await waitFor(() =>
        expect(nested.contains(document.activeElement)).toBe(true),
      );
      pressEscape();
      await waitFor(() =>
        expect(
          screen.queryByRole('dialog', { name: 'Nested settings' }),
        ).toBeNull(),
      );
      expect(screen.getByRole('dialog', { name: 'Outer settings' })).toBe(
        outer,
      );
      await waitFor(() => expect(document.activeElement).toBe(nestedTrigger));
      fireEvent.click(
        within(outer).getByRole('button', { name: 'Close outer dialog' }),
      );
      await waitFor(() => expect(screen.queryByRole('dialog')).toBeNull());
      await waitFor(() => expect(document.activeElement).toBe(outerTrigger));
    },
  );
});
