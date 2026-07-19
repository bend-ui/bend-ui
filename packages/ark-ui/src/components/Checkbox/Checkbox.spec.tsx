import { render, screen } from '@testing-library/react';

import { Checkbox } from './Checkbox';

describe('Checkbox', () => {
  it('propagates root variant props to styled parts', () => {
    render(
      <Checkbox.Root size="lg">
        <Checkbox.Control data-testid="control" />
      </Checkbox.Root>,
    );

    expect(screen.getByTestId('control').className.split(' ')).toContain(
      'Checkbox__control--size_lg',
    );
  });
});
