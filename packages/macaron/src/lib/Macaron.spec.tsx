import { render } from '@testing-library/react';

import Macaron from './Macaron';

describe('Macaron', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Macaron />);
    expect(baseElement).toBeTruthy();
  });
});
