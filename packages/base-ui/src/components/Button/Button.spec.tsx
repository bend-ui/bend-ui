import { render, screen } from '@testing-library/react';

import { Button } from './Button';

describe('Button', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button />);
    expect(baseElement).toBeTruthy();
  });

  it('uses native disabled behavior for isDisabled', () => {
    render(<Button isDisabled>Save</Button>);

    expect(
      (screen.getByRole('button', { name: 'Save' }) as HTMLButtonElement)
        .disabled,
    ).toBe(true);
  });

  it('exposes its compound parts', () => {
    expect(Button.Root).toBeDefined();
    expect(Button.Icon).toBeDefined();
    expect(Button.Label).toBeDefined();
    expect(Button.Spinner).toBeDefined();
  });
});
