import { render } from '@testing-library/react';

import Ark from './ark';

describe('Ark', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Ark />);
    expect(baseElement).toBeTruthy();
  });
});
