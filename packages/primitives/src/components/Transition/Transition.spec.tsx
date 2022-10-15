import { render } from '@testing-library/react';

import Transition from './Transition';

describe('Transition', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Transition />);
    expect(baseElement).toBeTruthy();
  });
});
