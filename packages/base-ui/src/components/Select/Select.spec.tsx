import { createRef } from 'react';
import {
  fireEvent,
  render,
  screen,
  waitFor,
  within,
} from '@testing-library/react';
import { Select, type SelectProps } from './Select';

const fonts = [
  { label: 'Sans-serif', value: 'sans' },
  { label: 'Serif', value: 'serif' },
  { label: 'Monospace', value: 'mono' },
];
function FontSelect({ disabled = false, onValueChange = vi.fn() }) {
  return (
    <Select.Root
      size="lg"
      items={fonts}
      defaultValue="sans"
      disabled={disabled}
      onValueChange={onValueChange}
    >
      <label id="font-label">Font family</label>
      <Select.Trigger aria-labelledby="font-label">
        <Select.Value />
      </Select.Trigger>
      <Select.Portal>
        <Select.Positioner alignItemWithTrigger={false}>
          <Select.Popup>
            <Select.List>
              {fonts.map((font) => (
                <Select.Item
                  key={font.value}
                  value={font.value}
                  disabled={font.value === 'serif'}
                >
                  <Select.ItemText>{font.label}</Select.ItemText>
                  <Select.ItemIndicator>✓</Select.ItemIndicator>
                </Select.Item>
              ))}
            </Select.List>
          </Select.Popup>
        </Select.Positioner>
      </Select.Portal>
    </Select.Root>
  );
}

describe('reference Select', () => {
  it('navigates by keyboard, selects a label, and restores trigger focus', async () => {
    const onValueChange = vi.fn();
    render(<FontSelect onValueChange={onValueChange} />);
    const trigger = screen.getByRole('combobox', { name: 'Font family' });
    expect(trigger.textContent).toBe('Sans-serif');
    expect(trigger.className).toContain('Select__trigger--size_lg');
    trigger.focus();
    fireEvent.keyDown(trigger, { key: 'ArrowDown', code: 'ArrowDown' });
    const list = await screen.findByRole('listbox');
    const mono = within(list).getByRole('option', { name: 'Monospace' });
    await waitFor(() =>
      expect(list.contains(document.activeElement)).toBe(true),
    );
    fireEvent.keyDown(document.activeElement!, { key: 'End', code: 'End' });
    await waitFor(() =>
      expect(mono.hasAttribute('data-highlighted')).toBe(true),
    );
    fireEvent.keyDown(mono, { key: 'Enter', code: 'Enter' });
    await waitFor(() => expect(screen.queryByRole('listbox')).toBeNull());
    expect(trigger.textContent).toBe('Monospace');
    expect(onValueChange.mock.calls[0][0]).toBe('mono');
    await waitFor(() => expect(document.activeElement).toBe(trigger));
  });

  it('Escape dismisses without committing a highlighted value', async () => {
    const onValueChange = vi.fn();
    render(<FontSelect onValueChange={onValueChange} />);
    const trigger = screen.getByRole('combobox', { name: 'Font family' });
    trigger.focus();
    fireEvent.keyDown(trigger, { key: 'ArrowDown', code: 'ArrowDown' });
    const list = await screen.findByRole('listbox');
    await waitFor(() =>
      expect(list.contains(document.activeElement)).toBe(true),
    );
    fireEvent.keyDown(document.activeElement!, {
      key: 'Escape',
      code: 'Escape',
    });
    await waitFor(() => expect(screen.queryByRole('listbox')).toBeNull());
    expect(onValueChange).not.toHaveBeenCalled();
    expect(trigger.textContent).toBe('Sans-serif');
    await waitFor(() => expect(document.activeElement).toBe(trigger));
  });

  it('does not open a disabled Select', () => {
    render(<FontSelect disabled />);
    const trigger = screen.getByRole('combobox', {
      name: 'Font family',
    }) as HTMLButtonElement;
    expect(trigger.disabled).toBe(true);
    fireEvent.click(trigger);
    fireEvent.keyDown(trigger, { key: 'ArrowDown', code: 'ArrowDown' });
    expect(screen.queryByRole('listbox')).toBeNull();
  });

  it('keeps a custom-container portal, popup ref, selected state, and finalFocus forwarding', async () => {
    const target = document.createElement('div');
    document.body.append(target);
    const popupRef = createRef<HTMLDivElement>();
    const finalFocus = createRef<HTMLButtonElement>();
    try {
      const { container } = render(
        <>
          <button ref={finalFocus}>Continue</button>
          <Select.Root items={fonts} defaultValue="sans">
            <Select.Trigger aria-label="Font">
              <Select.Value />
            </Select.Trigger>
            <Select.Portal container={target}>
              <Select.Positioner alignItemWithTrigger={false}>
                <Select.Popup ref={popupRef} finalFocus={finalFocus}>
                  <Select.List>
                    {fonts.map((font) => (
                      <Select.Item key={font.value} value={font.value}>
                        <Select.ItemText>{font.label}</Select.ItemText>
                      </Select.Item>
                    ))}
                  </Select.List>
                </Select.Popup>
              </Select.Positioner>
            </Select.Portal>
          </Select.Root>
        </>,
      );
      fireEvent.click(screen.getByRole('combobox', { name: 'Font' }));
      const list = await screen.findByRole('listbox');
      expect(target.contains(list)).toBe(true);
      expect(container.contains(list)).toBe(false);
      expect(popupRef.current?.contains(list)).toBe(true);
      expect(
        screen
          .getByRole('option', { name: 'Sans-serif' })
          .getAttribute('aria-selected'),
      ).toBe('true');
      fireEvent.pointerDown(screen.getByRole('option', { name: 'Serif' }));
      fireEvent.click(screen.getByRole('option', { name: 'Serif' }));
      await waitFor(() => expect(screen.queryByRole('listbox')).toBeNull());
      await waitFor(() =>
        expect(document.activeElement).toBe(finalFocus.current),
      );
    } finally {
      target.remove();
    }
  });
  it('renders convenience options from typed caller data and keeps disabled options unselectable', async () => {
    const onValueChange = vi.fn();
    render(
      <Select
        aria-label="Workspace"
        items={[
          { label: 'Design team', value: 'design' },
          { label: 'Archived team', value: 'archive', disabled: true },
          { label: 'Engineering', value: 'engineering' },
        ]}
        defaultValue="design"
        onValueChange={onValueChange}
        size="sm"
      />,
    );
    const trigger = screen.getByRole('combobox', { name: 'Workspace' });
    expect(trigger.textContent).toContain('Design team');
    expect(trigger.className).toContain('Select__trigger--size_sm');
    fireEvent.click(trigger);
    const archived = await screen.findByRole('option', {
      name: 'Archived team',
    });
    fireEvent.pointerDown(archived);
    fireEvent.click(archived);
    expect(onValueChange).not.toHaveBeenCalled();
    expect(screen.getByRole('listbox')).toBeTruthy();
    expect(screen.queryByRole('option', { name: 'Sans-serif' })).toBeNull();
    const engineering = screen.getByRole('option', { name: 'Engineering' });
    fireEvent.pointerDown(engineering);
    fireEvent.click(engineering);
    await waitFor(() => expect(trigger.textContent).toContain('Engineering'));
    expect(onValueChange.mock.calls[0][0]).toBe('engineering');
  });
  it('preserves number and multiple-object value types in the convenience API', async () => {
    const onNumbers = vi.fn();
    const first = { id: 1 },
      second = { id: 2 };
    const onObjects = vi.fn();
    render(
      <>
        <Select<number>
          aria-label="Number"
          items={[
            { label: 'One', value: 1 },
            { label: 'Two', value: 2 },
          ]}
          defaultValue={1}
          onValueChange={(value) => onNumbers(value?.toFixed(0))}
        />
        <Select<{ id: number }, true>
          aria-label="Members"
          multiple
          items={[
            { label: 'First', value: first },
            { label: 'Second', value: second },
          ]}
          defaultValue={[first]}
          onValueChange={(values) => onObjects(values.map((value) => value.id))}
        />
      </>,
    );
    fireEvent.click(screen.getByRole('combobox', { name: 'Members' }));
    const option = await screen.findByRole('option', { name: 'Second' });
    fireEvent.pointerDown(option);
    fireEvent.click(option);
    expect(onObjects).toHaveBeenCalledWith([1, 2]);
    expect(onNumbers).not.toHaveBeenCalled();
  });
});

describe('Select public props', () => {
  it.each(['sm', 'md', 'lg'] as const)(
    'accepts the %s recipe size on the convenience component',
    (size) => {
      const props: Pick<SelectProps<string>, 'size'> = { size };

      expect(props.size).toBe(size);
    },
  );
});
