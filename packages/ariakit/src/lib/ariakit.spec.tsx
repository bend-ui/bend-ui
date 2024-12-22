import { render } from '@testing-library/react';

import Ariakit from './ariakit';

describe('Ariakit', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Ariakit />);
    expect(baseElement).toBeTruthy();
  });
});
