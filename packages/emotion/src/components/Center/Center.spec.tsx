import { render } from '@testing-library/react';

import { Center } from '.';

describe('Center', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Center />);
    expect(baseElement).toBeTruthy();
  });
});
