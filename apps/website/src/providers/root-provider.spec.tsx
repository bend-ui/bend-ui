import { render, screen } from '@testing-library/react';
import { RootProvider } from './root-provider';

const { route } = vi.hoisted(() => ({
  route: { pathname: '/docs/components/button' },
}));
vi.mock('next/navigation', () => ({ usePathname: () => route.pathname }));
vi.mock('fumadocs-core/framework/next', () => ({
  NextProvider: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="next-provider">{children}</div>
  ),
}));
vi.mock('next-themes', () => ({
  ThemeProvider: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="theme-provider">{children}</div>
  ),
}));

describe('root providers', () => {
  it('keeps the Docs theme provider outside isolated preview documents', () => {
    const view = render(
      <RootProvider>
        <span>Content</span>
      </RootProvider>,
    );
    expect(screen.getByTestId('theme-provider')).toBeTruthy();
    route.pathname = '/component-preview/button';
    view.rerender(
      <RootProvider>
        <span>Content</span>
      </RootProvider>,
    );
    expect(screen.queryByTestId('theme-provider')).toBeNull();
    expect(screen.getByTestId('next-provider').textContent).toBe('Content');
    route.pathname = '/docs/components/button';
  });
});
