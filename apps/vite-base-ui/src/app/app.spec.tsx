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

  it('should link to the dental management demo', () => {
    const { getByRole } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );
    expect(getByRole('link', { name: /dental management/i })).toBeTruthy();
  });

  it('should render the dental management route', () => {
    const { getByText, getByRole } = render(
      <MemoryRouter initialEntries={['/dental-management/overview']}>
        <App />
      </MemoryRouter>,
    );
    expect(getByText('Dental Management Overview')).toBeTruthy();
    expect(
      getByRole('navigation', { name: /dental management/i }),
    ).toBeTruthy();
  });
});
