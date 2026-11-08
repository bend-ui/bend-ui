import { OverlaysNavigationExample } from './examples/overlays-navigation-example';
import { CoreFormsExample } from './examples/core-forms-example';
import type { MDXComponents } from 'mdx/types';
import type { ComponentProps } from 'react';

import { css, cx } from '@bend-ui/styled-system/css';
import { Accordion, Box, Stack, Tabs } from './interactive-mdx-components';
import { DialogReferenceExample } from './examples/dialog-example';
import { ComponentPreview } from './component-preview/component-preview';
import { ButtonReferenceExample } from './examples/button-example';
import { SelectReferenceExample } from './examples/select-example';

const codeBlock = css({
  backgroundColor: 'bg.muted',
  borderRadius: 'lg',
  boxShadow: '0 1px 2px rgb(0 0 0 / 8%), 0 8px 24px rgb(0 0 0 / 6%)',
  fontSize: 'sm',
  lineHeight: 'relaxed',
  marginTop: '6',
  maxWidth: '100%',
  overflowX: 'auto',
  _focusVisible: {
    outline: '2px solid',
    outlineColor: 'text',
    outlineOffset: '-3px',
  },
  padding: '5',
  '& code': { backgroundColor: 'transparent', padding: '0' },
});

const MdxPre = ({ className, ...props }: ComponentProps<'pre'>) => (
  <pre
    tabIndex={0}
    aria-label="Code example"
    className={cx(codeBlock, className)}
    {...props}
  />
);

const MdxTable = (props: ComponentProps<'table'>) => (
  <div
    role="region"
    aria-label="Scrollable table"
    tabIndex={0}
    className={css({
      maxWidth: '100%',
      overflowX: 'auto',
      _focusVisible: {
        outline: '2px solid',
        outlineColor: 'text',
        outlineOffset: '-3px',
      },
    })}
  >
    <table {...props} />
  </div>
);

const MdxCode = (props: ComponentProps<'code'>) => <code {...props} />;

export const mdxComponents: MDXComponents = {
  OverlaysNavigationExample,
  ButtonReferenceExample,
  DialogReferenceExample,
  CoreFormsExample,
  SelectReferenceExample,
  pre: MdxPre,
  table: MdxTable,
  code: MdxCode,
  Tabs,
  Accordion,
  Stack,
  Box,
  ComponentPreview,
};
