import { render, screen } from '@testing-library/react';

import { Checkbox } from './Checkbox';

function getCheckboxRoot() {
  const root = screen.getByRole('checkbox').closest('label');

  if (!root) {
    throw new Error('Expected the checkbox input to be wrapped in a label');
  }

  return root;
}

describe('Checkbox', () => {
  it('applies the generated slot classes to the rendered parts', () => {
    render(<Checkbox aria-label="Choose item" className="custom" size="sm" />);

    const root = getCheckboxRoot();
    const indicator = root.querySelector('[data-part="indicator"]');

    if (!indicator) {
      throw new Error('Expected the checkbox to render an indicator');
    }

    expect([...root.classList]).toEqual([
      'Checkbox__root',
      'Checkbox__root--size_sm',
      'custom',
    ]);
    expect([...indicator.classList]).toEqual([
      'Checkbox__control',
      'Checkbox__control--size_sm',
      'Checkbox__indicator',
      'Checkbox__indicator--size_sm',
    ]);
  });

  it('composes a className render prop with the generated root class', () => {
    render(
      <Checkbox
        aria-label="Choose item"
        className={({ isSelected }) => (isSelected ? 'selected' : 'idle')}
        isSelected
      />,
    );

    expect([...getCheckboxRoot().classList]).toEqual([
      'Checkbox__root',
      'Checkbox__root--size_md',
      'selected',
    ]);
  });
});
