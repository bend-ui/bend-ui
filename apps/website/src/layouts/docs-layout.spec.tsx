import { fireEvent, render, screen } from '@testing-library/react';
import type { Root } from 'fumadocs-core/page-tree';

import { DocsLayout, DocsPage } from './docs-layout';

const mockSetTheme = jest.fn();

jest.mock('fumadocs-core/framework', () => ({
  Link: (props: React.ComponentProps<'a'>) => <a {...props} />,
  usePathname: () => '/docs/components/button',
}));

jest.mock('@iconify/react', () => ({
  Icon: (props: React.ComponentProps<'svg'>) => <svg {...props} />,
}));

jest.mock('fumadocs-core/toc', () => ({
  AnchorProvider: ({ children }: { children: React.ReactNode }) => children,
  ScrollProvider: ({ children }: { children: React.ReactNode }) => children,
  TOCItem: (props: React.ComponentProps<'a'>) => <a {...props} />,
}));

jest.mock('fumadocs-core/page-tree', () => ({
  findNeighbour: (pageTree: Root) => ({
    previous: pageTree.children[1],
    next:
      pageTree.children[2].type === 'folder'
        ? pageTree.children[2].children[1]
        : undefined,
  }),
}));

jest.mock('next-themes', () => ({
  useTheme: () => ({ resolvedTheme: 'light', setTheme: mockSetTheme }),
}));

jest.mock('../../styled-system/css/index.mjs', () => ({
  ...jest.requireActual('../../styled-system/css/index.mjs'),
  css: (styles: unknown) => JSON.stringify(styles),
}));

const tree: Root = {
  type: 'root',
  name: 'Documentation',
  children: [
    { type: 'separator', name: 'Getting started' },
    {
      type: 'page',
      name: 'Introduction',
      url: '/docs/getting-started/introduction',
    },
    {
      type: 'folder',
      name: 'Components',
      children: [
        { type: 'page', name: 'Button', url: '/docs/components/button' },
        { type: 'page', name: 'Avatar', url: '/docs/components/avatar' },
      ],
    },
  ],
};

describe('Docs route layout', () => {
  it('renders the page tree and marks the current page active', async () => {
    render(
      <DocsLayout tree={tree}>
        <p>Current page</p>
      </DocsLayout>,
    );

    expect(screen.getByRole('navigation', { name: 'Documentation' })).toBeTruthy();
    expect(screen.getByRole('link', { name: 'Introduction' })).toBeTruthy();
    expect(screen.getByRole('link', { name: 'Avatar' })).toBeTruthy();
    expect(
      (await screen.findByRole('link', { name: 'Button' })).getAttribute(
        'aria-current',
      ),
    ).toBe('page');
  });

  it('renders the current page title, description, and MDX body', () => {
    render(
      <DocsPage
        title="Button"
        description="The primary action primitive."
      >
        <p>Compiled MDX content</p>
      </DocsPage>,
    );

    expect(screen.getByRole('heading', { name: 'Button' })).toBeTruthy();
    expect(screen.getByText('The primary action primitive.')).toBeTruthy();
    expect(screen.getByText('Compiled MDX content')).toBeTruthy();
  });

  it('renders the page table of contents and pager neighbour labels', () => {
    render(
      <DocsPage
        title="Button"
        tree={tree}
        url="/docs/components/button"
        toc={[
          { title: 'Props', url: '#props', depth: 2 },
          { title: 'Examples', url: '#examples', depth: 2 },
        ]}
      >
        <p>Compiled MDX content</p>
      </DocsPage>,
    );

    expect(screen.getByRole('navigation', { name: 'On this page' })).toBeTruthy();
    const tocLink = screen.getByRole('link', { name: 'Props' });
    const tocLinkStyles = JSON.parse(tocLink.className);

    expect(tocLinkStyles.color).toBe('text.weak');
    expect(tocLinkStyles['&[data-active="true"]']).toMatchObject({
      borderLeftColor: 'stroke.primary',
      color: 'text.primary',
    });
    expect(screen.getByRole('link', { name: /previous.*introduction/i })).toBeTruthy();
    expect(screen.getByRole('link', { name: /next.*avatar/i })).toBeTruthy();
  });

  it('lets the reader switch color scheme', async () => {
    render(
      <DocsLayout tree={tree}>
        <p>Current page</p>
      </DocsLayout>,
    );

    fireEvent.click(await screen.findByRole('button', { name: 'Switch to dark theme' }));

    expect(mockSetTheme).toHaveBeenCalledWith('dark');
  });
});
