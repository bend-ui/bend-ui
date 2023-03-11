import type { CSSProperties } from 'react';

type BaseStyles<Key extends string> = Record<Key, CSSProperties>;

type Keys = 'root' | 'list' | 'item' | 'link' | 'separator';

export const breadcrumbsStyles: BaseStyles<Keys> = {
  root: {
    display: 'flex',
  },
  list: {
    display: 'inline-flex',
    alignItems: 'center',
    margin: 0,
    padding: 0,
    listStyleType: 'none',
  },
  item: {
    display: 'inline-flex',
    alignItems: 'center',
  },
  link: {
    display: 'inline-flex',
    alignItems: 'center',
  },
  separator: {},
};

type BaseClasses<Key extends string> = Record<Key, string[]>;

export const breadcrumbsClasses: BaseClasses<Keys> = {
  root: ['flex'],
  list: ['inline-flex', 'items-center', 'm-0', 'p-0', 'list-none'],
  item: ['inline-flex', 'items-center'],
  link: ['inline-flex', 'items-center'],
  separator: [],
};
