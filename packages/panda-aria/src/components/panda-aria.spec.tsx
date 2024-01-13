import { render } from '@testing-library/react';

import PandaAria from './panda-aria';

describe('PandaAria', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PandaAria />);
    expect(baseElement).toBeTruthy();
  });
});
