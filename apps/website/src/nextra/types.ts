import type { PageOpts } from 'nextra';
import type { ReactNode } from 'react';
import type { DocsThemeConfig } from './constants';

export interface Context {
  pageOpts: PageOpts;
  themeConfig: DocsThemeConfig;
}

export interface SearchResult {
  children: ReactNode;
  id: string;
  prefix?: ReactNode;
  route: string;
}
