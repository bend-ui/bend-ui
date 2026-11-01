import { fireEvent, render, screen } from '@testing-library/react';

import Index from '../pages/index';

describe('Index', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Index />);
    expect(baseElement).toBeTruthy();
    expect(
      screen.getByRole('link', { name: /dental app/i }).getAttribute('href'),
    ).toBe('/dental-app');
    expect(
      screen.getByRole('link', { name: /dashboard/i }).getAttribute('href'),
    ).toBe('/dashboard');
  });

  it('switches between registered theme personalities', () => {
    render(<Index />);
    fireEvent.click(screen.getByRole('button', { name: 'Solstice' }));
    expect(document.documentElement.getAttribute('data-panda-theme')).toBe(
      'solstice',
    );
  });
});
