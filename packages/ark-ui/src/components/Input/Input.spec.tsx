import { render, screen } from '@testing-library/react';

import { Input } from './Input';

describe('Input', () => {
  it('preserves structural classes when consumers provide a class name', () => {
    render(
      <Input.Root className="custom-root" data-testid="root">
        <Input.Input className="custom-input" aria-label="Value" />
      </Input.Root>,
    );

    expect(screen.getByTestId('root').className.split(' ')).toEqual(
      expect.arrayContaining(['group', 'custom-root']),
    );
    expect(screen.getByRole('textbox').className.split(' ')).toEqual(
      expect.arrayContaining(['peer', 'custom-input']),
    );
  });
});
