import { render } from '@testing-library/react';

import { Heading } from './Heading';

describe('Heading', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Heading />);
    expect(baseElement).toBeTruthy();
  });

  it('renders the heading level from the as prop', () => {
    const { getByRole } = render(<Heading as="h1">Page title</Heading>);

    expect(getByRole('heading', { level: 1 }).textContent).toBe('Page title');
  });

  it('defaults to an h2', () => {
    const { getByRole } = render(<Heading>Section title</Heading>);

    expect(getByRole('heading', { level: 2 }).textContent).toBe(
      'Section title',
    );
  });
});
