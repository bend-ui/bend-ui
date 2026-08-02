import { fireEvent, render, screen } from '@testing-library/react';
import App from './app';

describe('Customization gallery', () => {
  it('renders the Base UI component gallery under the consumer design config', () => {
    render(<App />);

    expect(
      screen.getByRole('heading', { name: /same components/i }),
    ).toBeTruthy();
    expect(
      screen.getByRole('region', { name: /customized component gallery/i }),
    ).toBeTruthy();
    expect(screen.getByRole('button', { name: /create report/i })).toBeTruthy();
    expect(
      screen.getByRole('textbox', { name: /find a patient/i }),
    ).toBeTruthy();
    expect(screen.getByRole('tab', { name: /overview/i })).toBeTruthy();
  });

  it('swaps a bundled theme without changing component code', () => {
    render(<App />);
    fireEvent.click(screen.getByRole('button', { name: 'solstice' }));

    expect(document.documentElement.dataset.pandaTheme).toBe('solstice');
    expect(screen.getByText(/active theme: solstice/i)).toBeTruthy();
  });
});
