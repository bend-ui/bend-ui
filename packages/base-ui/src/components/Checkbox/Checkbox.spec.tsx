import { fireEvent, render, screen } from '@testing-library/react';

import { Checkbox } from './Checkbox';

describe('Checkbox', () => {
  it('emits the canonical checked attribute after user interaction', () => {
    render(
      <Checkbox.Root aria-label="Enable notifications">
        <Checkbox.Indicator />
      </Checkbox.Root>,
    );

    const checkbox = screen.getByRole('checkbox', {
      name: 'Enable notifications',
    });
    expect(checkbox.getAttribute('data-checked')).toBeNull();

    fireEvent.click(checkbox);

    expect(checkbox.getAttribute('data-checked')).toBe('');
  });

  it('emits canonical availability attributes and consumes recipe variants', () => {
    render(
      <Checkbox size="sm" disabled readOnly>
        Enable notifications
      </Checkbox>,
    );

    const checkbox = screen.getByRole('checkbox', {
      name: 'Enable notifications',
    });
    expect(checkbox.getAttribute('data-disabled')).toBe('');
    expect(checkbox.getAttribute('data-readonly')).toBe('');
    expect(checkbox.getAttribute('size')).toBeNull();
  });
});
