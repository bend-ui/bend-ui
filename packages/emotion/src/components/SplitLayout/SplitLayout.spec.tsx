import { render } from '@testing-library/react';

import { SplitLayout } from './SplitLayout';

describe('SplitLayout', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SplitLayout />);
    expect(baseElement).toBeTruthy();
  });
});
