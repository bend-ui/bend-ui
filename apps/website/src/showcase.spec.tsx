import { fireEvent, render, screen } from '@testing-library/react';
import { Showcase } from '../app/showcase/showcase';

describe('Studio workspace', () => {
  it('filters the projects and announces an empty result', () => {
    render(<Showcase />);
    fireEvent.change(screen.getByRole('textbox', { name: 'Filter projects' }), {
      target: { value: 'Morrow' },
    });
    expect(
      screen.getByRole('button', { name: /Editorial refresh/ }),
    ).not.toBeNull();
    expect(
      screen.queryByRole('button', { name: /Spring campaign/ }),
    ).toBeNull();
    fireEvent.change(screen.getByRole('textbox', { name: 'Filter projects' }), {
      target: { value: 'no matching project' },
    });
    expect(screen.getByText(/No projects match/)).not.toBeNull();
  });

  it('links and announces whitespace validation errors and focuses the first field', () => {
    render(<Showcase />);
    const name = screen.getByRole('textbox', { name: 'Project name' });
    fireEvent.change(name, { target: { value: '   ' } });
    fireEvent.change(screen.getByRole('textbox', { name: 'Client' }), {
      target: { value: '' },
    });
    fireEvent.click(screen.getByRole('button', { name: 'Save changes' }));
    expect(document.activeElement).toBe(name);
    expect(name.getAttribute('aria-invalid')).toBe('true');
    expect(
      document.getElementById(name.getAttribute('aria-describedby') ?? '')
        ?.textContent,
    ).toBe('Enter a project name.');
    expect(screen.getAllByRole('alert')).toHaveLength(2);
  });
});
