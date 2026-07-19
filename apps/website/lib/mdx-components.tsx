import type { MDXComponents } from 'mdx/types';
import type { ComponentProps } from 'react';

import { css, cx } from '../styled-system/css/index.mjs';
import { Accordion, Box, Stack, Tabs } from './interactive-mdx-components';

const codeBlock = css({
  backgroundColor: 'bg.muted',
  borderRadius: 'lg',
  boxShadow: '0 1px 2px rgb(0 0 0 / 8%), 0 8px 24px rgb(0 0 0 / 6%)',
  fontSize: 'sm',
  lineHeight: 'relaxed',
  marginTop: '6',
  overflowX: 'auto',
  padding: '5',
  '& code': { backgroundColor: 'transparent', padding: '0' },
});

const MdxPre = ({ className, ...props }: ComponentProps<'pre'>) => (
  <pre className={cx(codeBlock, className)} {...props} />
);

const MdxCode = (props: ComponentProps<'code'>) => <code {...props} />;

export const mdxComponents: MDXComponents = {
  pre: MdxPre,
  code: MdxCode,
  Tabs,
  Accordion,
  Stack,
  Box,
};
