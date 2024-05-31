import { useRouter } from 'next/router';
import { useMemo } from 'react';
import 'focus-visible';
import { useFSRoute, useMounted } from 'nextra/hooks';
import { MDXProvider } from 'nextra/mdx';
import './polyfill';
import { normalizePages } from 'nextra/normalize-pages';
import { cx } from '@particles/styled-system/css';
import { renderComponent } from './utils';
import { getComponents } from './mdx-components';
import { ActiveAnchorProvider, ConfigProvider, useConfig } from './contexts';
import { DEFAULT_LOCALE } from './constants';
import {
  Banner,
  Breadcrumb,
  Head,
  NavLinks,
  Sidebar,
  SkipNavContent,
} from './components';
import type { PartialDocsThemeConfig } from './constants';
import type { ReactElement, ReactNode } from 'react';
import type { PageTheme } from 'nextra/normalize-pages';
import type { NextraThemeLayoutProps, PageOpts } from 'nextra';

interface BodyProps {
  themeContext: PageTheme;
  breadcrumb: ReactNode;
  timestamp?: number;
  navigation: ReactNode;
  children: ReactNode;
}

const classes = {
  toc: cx(
    'nextra-toc nx-order-last nx-hidden nx-w-64 nx-shrink-0 xl:nx-block print:nx-hidden',
  ),
  main: cx('nx-w-full nx-break-words'),
};

const Body = ({
  themeContext,
  breadcrumb,
  timestamp,
  navigation,
  children,
}: BodyProps): ReactElement => {
  const config = useConfig();
  const mounted = useMounted();

  if (themeContext.layout === 'raw') {
    return <div className={classes.main}>{children}</div>;
  }

  const date =
    themeContext.timestamp && config.gitTimestamp && timestamp
      ? new Date(timestamp)
      : null;

  const gitTimestampEl =
    // Because a user's time zone may be different from the server page
    mounted && date ? (
      <div className="nx-mt-12 nx-mb-8 nx-block nx-text-xs nx-text-gray-500 ltr:nx-text-right rtl:nx-text-left dark:nx-text-gray-400">
        {renderComponent(config.gitTimestamp, { timestamp: date })}
      </div>
    ) : (
      <div className="nx-mt-16" />
    );

  const content = (
    <>
      {children}
      {gitTimestampEl}
      {navigation}
    </>
  );

  const body = config.main?.({ children: content }) || content;

  if (themeContext.layout === 'full') {
    return (
      <article
        className={cx(
          classes.main,
          'nextra-content nx-min-h-[calc(100vh-var(--nextra-navbar-height))] nx-pl-[max(env(safe-area-inset-left),1.5rem)] nx-pr-[max(env(safe-area-inset-right),1.5rem)]',
        )}
      >
        {body}
      </article>
    );
  }

  return (
    <article
      className={cx(
        classes.main,
        'nextra-content nx-flex nx-min-h-[calc(100vh-var(--nextra-navbar-height))] nx-min-w-0 nx-justify-center nx-pb-8 nx-pr-[calc(env(safe-area-inset-right)-1.5rem)]',
        themeContext.typesetting === 'article' &&
          'nextra-body-typesetting-article',
      )}
    >
      <main className="nx-w-full nx-min-w-0 nx-max-w-6xl nx-px-6 nx-pt-4 md:nx-px-12">
        {breadcrumb}
        {body}
      </main>
    </article>
  );
};

const InnerLayout = ({
  filePath,
  pageMap,
  frontMatter,
  headings,
  timestamp,
  children,
}: PageOpts & { children: ReactNode }): ReactElement => {
  const config = useConfig();
  const { locale = DEFAULT_LOCALE, defaultLocale } = useRouter();
  const fsPath = useFSRoute();

  const {
    activeType,
    activeIndex,
    activeThemeContext,
    activePath,
    topLevelNavbarItems,
    docsDirectories,
    flatDirectories,
    flatDocsDirectories,
    directories,
  } = useMemo(
    () =>
      normalizePages({
        list: pageMap,
        locale,
        defaultLocale,
        route: fsPath,
      }),
    [pageMap, locale, defaultLocale, fsPath],
  );

  const themeContext = { ...activeThemeContext, ...frontMatter };
  const hideSidebar =
    !themeContext.sidebar ||
    themeContext.layout === 'raw' ||
    activeType === 'page';

  const tocEl =
    activeType === 'page' ||
    !themeContext.toc ||
    themeContext.layout !== 'default' ? (
      themeContext.layout !== 'full' &&
      themeContext.layout !== 'raw' && (
        <nav aria-label="table of contents" className={classes.toc} />
      )
    ) : (
      <nav
        aria-label="table of contents"
        className={cx(classes.toc, 'nx-px-4')}
      >
        {renderComponent(config.toc.component, {
          headings: config.toc.float ? headings : [],
          filePath,
        })}
      </nav>
    );

  const localeConfig = config.i18n.find((l) => l.locale === locale);
  const isRTL = localeConfig
    ? localeConfig.direction === 'rtl'
    : config.direction === 'rtl';

  const direction = isRTL ? 'rtl' : 'ltr';

  return (
    // This makes sure that selectors like `[dir=ltr] .nextra-container` work
    // before hydration as Tailwind expects the `dir` attribute to exist on the
    // `html` element.
    <div dir={direction}>
      <script
        dangerouslySetInnerHTML={{
          __html: `document.documentElement.setAttribute('dir','${direction}')`,
        }}
      />
      <Head />
      <Banner />
      {themeContext.navbar &&
        renderComponent(config.navbar.component, {
          flatDirectories,
          items: topLevelNavbarItems,
        })}
      <div
        className={cx(
          'nx-mx-auto nx-flex',
          themeContext.layout !== 'raw' && 'nx-max-w-[90rem]',
        )}
      >
        <ActiveAnchorProvider>
          <Sidebar
            asPopover={hideSidebar}
            docsDirectories={docsDirectories}
            flatDirectories={flatDirectories}
            fullDirectories={directories}
            headings={headings}
            includePlaceholder={themeContext.layout === 'default'}
          />
          {tocEl}
          <SkipNavContent />
          <Body
            breadcrumb={
              activeType !== 'page' && themeContext.breadcrumb ? (
                <Breadcrumb activePath={activePath} />
              ) : null
            }
            navigation={
              activeType !== 'page' && themeContext.pagination ? (
                <NavLinks
                  currentIndex={activeIndex}
                  flatDirectories={flatDocsDirectories}
                />
              ) : null
            }
            themeContext={themeContext}
            timestamp={timestamp}
          >
            <MDXProvider
              components={getComponents({
                isRawLayout: themeContext.layout === 'raw',
                components: config.components,
              })}
            >
              {children}
            </MDXProvider>
          </Body>
        </ActiveAnchorProvider>
      </div>
      {themeContext.footer &&
        renderComponent(config.footer.component, { menu: hideSidebar })}
    </div>
  );
};

export default function Layout({
  children,
  ...context
}: NextraThemeLayoutProps): ReactElement {
  return (
    <ConfigProvider value={context}>
      <InnerLayout {...context.pageOpts}>{children}</InnerLayout>
    </ConfigProvider>
  );
}

export { useConfig };
export type { PartialDocsThemeConfig as DocsThemeConfig };
export { useMDXComponents } from 'nextra/mdx';
export {
  Callout,
  Steps,
  Tabs,
  Tab,
  Cards,
  Card,
  FileTree,
} from 'nextra/components';
export { useTheme } from 'next-themes';
export { Link } from './mdx-components';
export {
  Bleed,
  Collapse,
  NotFoundPage,
  ServerSideErrorPage,
  Navbar,
  SkipNavContent,
  SkipNavLink,
  ThemeSwitch,
  LocaleSwitch,
} from './components';
