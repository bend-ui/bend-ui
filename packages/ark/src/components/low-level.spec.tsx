import { render, screen } from '@testing-library/react';
import { Button, DismissButton, Input } from './index';

describe('Ark low-level components', () => {
  it('exports a local Button with compound parts', () => {
    render(<Button icon={<span aria-hidden="true">+</span>}>Add</Button>);

    expect(screen.getByRole('button', { name: 'Add' })).toBeTruthy();
    expect(Button.Root).toBeDefined();
    expect(Button.Icon).toBeDefined();
    expect(Button.Label).toBeDefined();
  });

  it('renders native input props on the input element', () => {
    render(<Input aria-label="Search" size="sm" />);

    expect(screen.getByRole('textbox', { name: 'Search' })).toBeTruthy();
  });

  it('provides an accessible dismiss button', () => {
    render(<DismissButton />);

    expect(screen.getByRole('button', { name: 'Dismiss' })).toBeTruthy();
  });

  it('uses native disabled behavior for isDisabled', () => {
    render(<Button isDisabled>Save</Button>);

    expect(
      (screen.getByRole('button', { name: 'Save' }) as HTMLButtonElement)
        .disabled,
    ).toBe(true);
  });
});
