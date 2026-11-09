import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { Preview } from '../../lib/component-preview/preview';
import { isExampleId } from '../../lib/component-preview/registry';

describe('component preview', () => {
  it('validates identifiers and resets the frame and its controls', () => {
    expect(isExampleId('select')).toBe(true);
    expect(isExampleId('toString')).toBe(false);
    render(<Preview id="button" source="example source" />);
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
