'use client';

import { Heading, Sidebar, Text } from '@bend-ui/base-ui';
import { Icon } from '@iconify/react';
import { Link, usePathname } from 'fumadocs-core/framework';
import {
  findNeighbour,
  type Folder,
  type Item,
  type Node,
  type Root,
} from 'fumadocs-core/page-tree';
import {
  AnchorProvider,
  ScrollProvider,
  TOCItem,
  type TableOfContents,
} from 'fumadocs-core/toc';
import { useRef, useSyncExternalStore, type ReactNode } from 'react';
import { useTheme } from 'next-themes';

import {
  arrowLeftIcon,
  arrowRightIcon,
  externalLinkIcon,
  sidebarIcon,
} from '../icons';
import { css } from '../../styled-system/css/index.mjs';
import { ThemePersonalitySwitcherPrototype } from '../../lib/theme-personality-switcher-prototype';

interface DocsLayoutProps {
  children: ReactNode;
  tree: Root;
}

interface DocsPageProps {
  children: ReactNode;
  description?: ReactNode;
  title: ReactNode;
  toc?: TableOfContents;
  tree?: Root;
  url?: string;
}

const normalizePath = (path: string) => path.replace(/\/$/, '') || '/';

const PageLink = ({ item, pathname }: { item: Item; pathname: string }) => {
  const active = normalizePath(item.url) === normalizePath(pathname);
  const external = item.external ?? /^[a-z][a-z\d+.-]*:/i.test(item.url);

  return (
    <Sidebar.MenuItem>
      <Sidebar.MenuSubButton
        as={Link}
        href={item.url}
        aria-current={active ? 'page' : undefined}
      >
        <Sidebar.Label>{item.name}</Sidebar.Label>
        {external ? <Icon icon={externalLinkIcon} aria-hidden="true" /> : null}
      </Sidebar.MenuSubButton>
    </Sidebar.MenuItem>
  );
};

const FolderItems = ({ folder, pathname }: { folder: Folder; pathname: string }) => (
  <Sidebar.Group>
    <Sidebar.GroupLabel>{folder.name}</Sidebar.GroupLabel>
    <Sidebar.GroupContent>
      <Sidebar.MenuSub>
        {folder.index ? <PageLink item={folder.index} pathname={pathname} /> : null}
        {folder.children.map((node, index) => (
          <TreeNode key={node.$id ?? `${node.type}-${index}`} node={node} pathname={pathname} />
        ))}
      </Sidebar.MenuSub>
    </Sidebar.GroupContent>
  </Sidebar.Group>
);

const TreeNode = ({ node, pathname }: { node: Node; pathname: string }) => {
  if (node.type === 'separator') {
    return <Sidebar.GroupLabel>{node.name}</Sidebar.GroupLabel>;
  }

  if (node.type === 'folder') {
    return <FolderItems folder={node} pathname={pathname} />;
  }

  return (
    <Sidebar.Menu>
      <PageLink item={node} pathname={pathname} />
    </Sidebar.Menu>
  );
};

const ColorModeControl = () => {
  const mounted = useSyncExternalStore(
    () => () => undefined,
    () => true,
    () => false,
  );
  const { theme, setTheme } = useTheme();

  if (!mounted) {
    return <span aria-hidden="true" className={css({ width: '10', height: '10' })} />;
  }

  return (
    <label className={css({ display: 'inline-flex', alignItems: 'center', gap: '2', fontSize: 'sm' })}>
      <span className={css({ color: 'fg.muted' })}>Color mode</span>
      <select
        aria-label="Color mode"
        value={theme ?? 'system'}
        onChange={(event) => setTheme(event.target.value)}
        className={css({
          minHeight: '10',
          paddingInline: '2',
          border: 'border.weak',
          borderRadius: 'md',
          background: 'bg.page',
          color: 'fg.default',
          _focusVisible: { outline: '2px solid', outlineColor: 'stroke.primary', outlineOffset: '2px' },
        })}
      >
        <option value="system">System</option>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
    </label>
  );
};

export const DocsLayout = ({ children, tree }: DocsLayoutProps) => {
  const pathname = usePathname();
  const navigationLabel = typeof tree.name === 'string' ? tree.name : 'Documentation';

  return (
    <Sidebar.Provider>
      <Sidebar.Root collapsible="none">
        <Sidebar.Header>
          <Link
            href="/"
            className={css({
              color: 'fg.default',
              fontWeight: 'bold',
              letterSpacing: 'tight',
              textDecoration: 'none',
            })}
          >
            Bend UI
          </Link>
        </Sidebar.Header>
        <Sidebar.Content>
          <nav aria-label={navigationLabel}>
            {tree.children.map((node, index) => (
              <TreeNode
                key={node.$id ?? `${node.type}-${index}`}
                node={node}
                pathname={pathname}
              />
            ))}
          </nav>
        </Sidebar.Content>
      </Sidebar.Root>
      <Sidebar.Inset>
        <header
          className={css({
            position: 'sticky',
            top: '0',
            zIndex: '5',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            minHeight: '14',
            paddingInline: '3',
            backgroundColor: 'bg.page/88',
            backdropFilter: 'blur(12px)',
            borderBottom: 'border.weak',
          })}
        >
          <Sidebar.Trigger className={css({ display: { base: 'inline-flex', md: 'none' } })}>
            <Icon icon={sidebarIcon} aria-hidden="true" />
          </Sidebar.Trigger>
          <span className={css({ display: { base: 'none', md: 'block' } })} />
          <ColorModeControl />
        </header>
        {pathname === '/docs/foundation/themes' ? (
          <ThemePersonalitySwitcherPrototype />
        ) : null}
        {children}
      </Sidebar.Inset>
    </Sidebar.Provider>
  );
};

const prose = css({
  color: 'fg.default',
  lineHeight: 'relaxed',
  textWrap: 'pretty',
  '& :where(h2, h3, h4, h5, h6)': {
    color: 'fg.default',
    fontWeight: 'extrabold',
    letterSpacing: 'tight',
    lineHeight: 'tight',
    marginTop: '10',
    marginBottom: '4',
    scrollMarginTop: '20',
    textWrap: 'balance',
  },
  '& :where(h2)': { borderBottom: 'border.weak', fontSize: '2xl', paddingBottom: '2' },
  '& :where(h3)': { fontSize: 'xl' },
  '& :where(p, ul, ol, blockquote, table)': { marginTop: '5' },
  '& :where(ul, ol)': { paddingLeft: '6' },
  '& :where(ul)': { listStyleType: 'disc' },
  '& :where(ol)': { listStyleType: 'decimal' },
  '& :where(li + li)': { marginTop: '2' },
  '& :where(a)': {
    color: 'fg.default',
    fontWeight: 'medium',
    textDecoration: 'underline',
    textUnderlineOffset: '4px',
  },
  '& :where(blockquote)': {
    borderLeft: '4px solid',
    borderColor: 'border.emphasized',
    color: 'fg.muted',
    fontStyle: 'italic',
    paddingLeft: '5',
  },
  '& :where(hr)': { border: '0', borderTop: 'border.weak', marginBlock: '10' },
  '& :where(table)': {
    borderCollapse: 'collapse',
    display: 'block',
    overflowX: 'auto',
    width: '100%',
  },
  '& :where(th, td)': {
    border: 'border.weak',
    paddingInline: '4',
    paddingBlock: '3',
    textAlign: 'left',
  },
  '& :where(th)': { backgroundColor: 'bg.muted', fontWeight: 'semibold' },
  '& :where(tbody tr:nth-child(even))': { backgroundColor: 'bg.subtle' },
  '& :where(:not(pre) > code)': {
    backgroundColor: 'bg.muted',
    borderRadius: 'sm',
    fontSize: 'sm',
    fontWeight: 'semibold',
    paddingInline: '1.5',
    paddingBlock: '0.5',
  },
  '& :where(img)': {
    borderRadius: 'md',
    outline: '1px solid rgb(0 0 0 / 10%)',
    _dark: { outlineColor: 'rgb(255 255 255 / 10%)' },
  },
});

const PagerLink = ({ direction, item }: { direction: 'next' | 'previous'; item: Item }) => (
  <Link
    href={item.url}
    aria-label={`${direction === 'previous' ? 'Previous' : 'Next'}: ${String(item.name)}`}
    className={css({
      display: 'flex',
      alignItems: 'center',
      gap: '3',
      minHeight: '12',
      paddingInline: '4',
      paddingBlock: '3',
      borderRadius: 'lg',
      color: 'fg.muted',
      textDecoration: 'none',
      transitionProperty: 'background-color, color, transform',
      transitionDuration: 'fast',
      _hover: { backgroundColor: 'fill.hover', color: 'fg.default' },
      _active: { transform: 'scale(0.96)' },
      _focusVisible: {
        outline: '2px solid',
        outlineColor: 'stroke.primary',
        outlineOffset: '2px',
      },
    })}
  >
    {direction === 'previous' ? <Icon icon={arrowLeftIcon} aria-hidden="true" /> : null}
    <span>{item.name}</span>
    {direction === 'next' ? <Icon icon={arrowRightIcon} aria-hidden="true" /> : null}
  </Link>
);

export const DocsPage = ({
  children,
  description,
  title,
  toc = [],
  tree,
  url,
}: DocsPageProps) => {
  const tocRef = useRef<HTMLElement>(null);
  const neighbours = tree && url ? findNeighbour(tree, url) : {};

  return (
    <div
      className={css({
        display: 'grid',
        gridTemplateColumns: { base: 'minmax(0, 1fr)', xl: 'minmax(0, 1fr) 16rem' },
        minHeight: '100vh',
      })}
    >
      <article
        className={css({
          width: '100%',
          maxWidth: '4xl',
          marginInline: 'auto',
          paddingInline: { base: '5', md: '10' },
          paddingBlock: { base: '10', md: '16' },
        })}
      >
        <header className={css({ marginBottom: '10' })}>
          <Heading
            as="h1"
            fontSize={{ base: '4xl', md: '5xl' }}
            fontWeight="extrabold"
            letterSpacing="tight"
            lineHeight="tight"
            textWrap="balance"
          >
            {title}
          </Heading>
          {description ? (
            <Text
              as="p"
              color="fg.muted"
              fontSize="lg"
              lineHeight="relaxed"
              marginTop="4"
              maxWidth="2xl"
              textWrap="pretty"
            >
              {description}
            </Text>
          ) : null}
        </header>
        <div className={prose}>{children}</div>
        {neighbours.previous || neighbours.next ? (
          <nav
            aria-label="Page navigation"
            className={css({
              display: 'flex',
              justifyContent: 'space-between',
              gap: '4',
              marginTop: '16',
              paddingTop: '6',
              borderTop: 'border.weak',
            })}
          >
            {neighbours.previous ? (
              <PagerLink direction="previous" item={neighbours.previous} />
            ) : (
              <span />
            )}
            {neighbours.next ? <PagerLink direction="next" item={neighbours.next} /> : null}
          </nav>
        ) : null}
      </article>
      {toc.length > 0 ? (
        <aside
          className={css({
            display: { base: 'none', xl: 'block' },
            position: 'sticky',
            top: '0',
            alignSelf: 'start',
            height: '100vh',
            paddingInline: '6',
            paddingBlock: '16',
          })}
        >
          <AnchorProvider toc={toc} single>
            <ScrollProvider containerRef={tocRef}>
              <nav
                ref={tocRef}
                aria-label="On this page"
                className={css({ maxHeight: 'calc(100vh - 8rem)', overflowY: 'auto' })}
              >
                <Text as="p" fontSize="sm" fontWeight="semibold" marginBottom="3">
                  On this page
                </Text>
                <ul className={css({ listStyle: 'none', margin: '0', padding: '0' })}>
                  {toc.map((item) => (
                    <li key={item.url}>
                      <TOCItem
                        href={item.url}
                        className={css({
                          display: 'flex',
                          alignItems: 'center',
                          minHeight: '10',
                          color: 'text.weak',
                          fontSize: 'sm',
                          paddingBlock: '1',
                          paddingLeft: item.depth > 2 ? '7' : '3',
                          borderLeftWidth: '2px',
                          borderLeftStyle: 'solid',
                          borderLeftColor: 'stroke.weak',
                          textDecoration: 'none',
                          transitionProperty: 'color, border-color',
                          transitionDuration: 'fast',
                          _hover: { color: 'text.strong' },
                          '&[data-active="true"]': {
                            color: 'text.primary',
                            borderLeftColor: 'stroke.primary',
                            fontWeight: 'semibold',
                          },
                        })}
                      >
                        {item.title}
                      </TOCItem>
                    </li>
                  ))}
                </ul>
              </nav>
            </ScrollProvider>
          </AnchorProvider>
        </aside>
      ) : null}
    </div>
  );
};
