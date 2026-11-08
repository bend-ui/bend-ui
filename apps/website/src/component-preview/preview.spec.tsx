import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { Preview } from '../../lib/component-preview/preview';
import { isExampleId } from '../../lib/component-preview/registry';

const buttonSource = readFileSync(
  resolve(__dirname, '../../lib/component-preview/examples/button.tsx'),
  'utf8',
);
const selectSource = readFileSync(
  resolve(__dirname, '../../lib/component-preview/examples/select.tsx'),
  'utf8',
);

describe('component preview', () => {
  it('validates identifiers and resets the frame and its controls', () => {
    expect(isExampleId('select')).toBe(true);
    expect(isExampleId('toString')).toBe(false);
    render(<Preview id="button" source={buttonSource} />);
    const originalFrame = screen.getByTitle('Button live example');
    fireEvent.change(screen.getByLabelText('Theme'), {
      target: { value: 'volt' },
    });
    fireEvent.change(screen.getByLabelText('Color mode'), {
      target: { value: 'dark' },
    });
    fireEvent.change(screen.getByLabelText('Preview width'), {
      target: { value: '320' },
    });
    expect(originalFrame.getAttribute('src')).toContain('theme=volt&mode=dark');
    expect(originalFrame.parentElement?.style.maxWidth).toBe('320px');
    fireEvent.click(screen.getByRole('button', { name: 'Reset preview' }));
    const resetFrame = screen.getByTitle('Button live example');
    expect(resetFrame).not.toBe(originalFrame);
    expect(resetFrame.getAttribute('src')).toContain(
      'theme=stratus&mode=light',
    );
    expect(resetFrame.parentElement?.style.maxWidth).toBe('100%');
    expect(screen.getByRole('status').textContent).toBe('Preview reset.');
  });

  it('reports copy success only after copying, and reports failure', async () => {
    const writeText = vi
      .fn()
      .mockResolvedValueOnce(undefined)
      .mockRejectedValueOnce(new Error('denied'));
    vi.stubGlobal('navigator', { ...navigator, clipboard: { writeText } });
    try {
      render(<Preview id="avatar" source={'exact source\n'} />);
      fireEvent.click(screen.getByRole('button', { name: 'Copy source' }));
      await waitFor(() =>
        expect(screen.getByRole('status').textContent).toBe('Source copied.'),
      );
      expect(writeText).toHaveBeenCalledWith('exact source\n');
      fireEvent.click(screen.getByRole('button', { name: 'Copy source' }));
      await waitFor(() =>
        expect(screen.getByRole('status').textContent).toContain(
          'Copy failed.',
        ),
      );
    } finally {
      vi.unstubAllGlobals();
    }
  });
});

describe('interactive props', () => {
  it('updates generated usage with the controls and resets them', () => {
    render(<Preview id="button" source={buttonSource} />);
    fireEvent.change(screen.getByLabelText('Label'), {
      target: { value: 'Publish' },
    });
    fireEvent.change(screen.getByLabelText('Size'), {
      target: { value: 'lg' },
    });
    fireEvent.click(screen.getByLabelText('Disabled'));
    expect(screen.getByText(/"size":"lg"/).textContent).toContain(
      'Publish',
    );
    fireEvent.click(screen.getByRole('button', { name: 'Reset preview' }));
    expect((screen.getByLabelText('Label') as HTMLInputElement).value).toBe(
      'Save changes',
    );
    expect(
      (screen.getByLabelText('Disabled') as HTMLInputElement).checked,
    ).toBe(false);
  });

  it('accepts only validated selection messages from its own frame and origin', () => {
    render(<Preview id="select" source={selectSource} />);
    const frame = screen.getByTitle('Select live example') as HTMLIFrameElement;
    const selection = {
      kind: 'select',
      value: 'serif',
      size: 'md',
      disabled: false,
    };
    const send = (origin: string, source: Window | null, state: unknown) =>
      fireEvent(
        window,
        new MessageEvent('message', {
          origin,
          source,
          data: { type: 'bend-preview-selection', id: 'select', state },
        }),
      );
    send('https://other.test', frame.contentWindow, selection);
    send(window.location.origin, window, selection);
    send(window.location.origin, frame.contentWindow, {
      ...selection,
      value: 'invalid',
    });
    expect((screen.getByLabelText('Value') as HTMLSelectElement).value).toBe(
      'sans',
    );
    send(window.location.origin, frame.contentWindow, selection);
    expect((screen.getByLabelText('Value') as HTMLSelectElement).value).toBe(
      'serif',
    );
    expect(screen.getByText(/useState<.*>\("serif"\)/)).toBeTruthy();
  });
});
