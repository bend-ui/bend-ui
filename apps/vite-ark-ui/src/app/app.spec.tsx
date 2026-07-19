import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import App from './app';

describe('App', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );
    expect(baseElement).toBeTruthy();
  });

  it('links to both canonical demo scenarios', () => {
    const { getByRole } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );
    expect(getByRole('link', { name: /ski resort/i })).toBeTruthy();
    expect(getByRole('link', { name: /dental management/i })).toBeTruthy();
  });
});
