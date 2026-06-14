'use client';

import { table } from '@bend-ui/styled-system/recipes';
import { styled, createStyleContext } from '@bend-ui/styled-system/jsx';

const { withProvider, withContext } = createStyleContext(table);

const Root = withProvider(styled.table, 'root');

const Caption = withContext(styled.caption, 'caption');

const Header = withContext(styled.thead, 'header');

const Body = withContext(styled.tbody, 'body');

const Footer = withContext(styled.tfoot, 'footer');

const Row = withContext(styled.tr, 'row');

const Head = withContext(styled.th, 'head');

const HeaderCell = withContext(styled.td, 'headerCell');

const Cell = withContext(styled.td, 'cell');

export const Table = Object.assign(Root, {
  Root,
  Caption,
  Header,
  Body,
  Footer,
  Row,
  Head,
  Cell,
  HeaderCell,
});
