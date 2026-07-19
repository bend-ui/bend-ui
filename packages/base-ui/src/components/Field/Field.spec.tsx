import { render, screen } from '@testing-library/react';

import { Field } from './Field';

describe('Field', () => {
  it('emits the canonical invalid attribute', () => {
    const { container } = render(
      <Field.Root invalid>
        <Field.Label>Email</Field.Label>
        <Field.Control />
      </Field.Root>,
    );

    const input = screen.getByRole('textbox', { name: 'Email' });
    const field = container.querySelector('div[data-part="root"]');

    expect(field?.getAttribute('data-invalid')).toBe('');
    expect(input.getAttribute('data-invalid')).toBe('');
  });
});
