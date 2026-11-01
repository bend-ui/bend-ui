import { fireEvent, render, screen } from '@testing-library/react';
import DentalApp from '../pages/dental-app';

vi.mock('../hooks', () => ({
  useFetchData: () => ({
    loading: false,
    data: [
      { id: 1, patientId: 10, doctorId: 20, status: 'confirmed' },
      { id: 2, patientId: 11, doctorId: 20, status: 'pending' },
    ],
  }),
}));

describe('Dental playground', () => {
  it('renders appointments through the current package adapters', async () => {
    render(<DentalApp />);

    expect(
      screen.getByRole('navigation', { name: 'Dental management' }),
    ).toBeTruthy();
    expect(screen.getByRole('tab', { name: 'Confirmed 1' })).toBeTruthy();
    expect(screen.getByText('#1')).toBeTruthy();
    fireEvent.click(screen.getByRole('tab', { name: 'Pending 1' }));
    expect(
      (await screen.findByRole('tabpanel', { name: 'Pending 1' })).textContent,
    ).toContain('#2');
  });
});
