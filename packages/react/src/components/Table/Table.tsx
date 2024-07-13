import { table } from '@particles/styled-system/recipes';
import { styled } from '@particles/styled-system/jsx';
import { createStyleContext } from '../../utils/create-style-context';

const { withProvider, withContext } = createStyleContext(table);

const Root = withProvider(styled.table, 'root');

const Caption = withContext(styled.caption, 'caption');

const Header = withContext(styled.thead, 'header');

const Body = withContext(styled.tbody, 'body');

const Footer = withContext(styled.tfoot, 'footer');

const Row = withContext(styled.tr, 'row');

const Head = withContext(styled.th, 'head');

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
});
