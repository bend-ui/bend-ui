import { card } from '@particles/styled-system/recipes';
import { styled, createStyleContext } from '@particles/styled-system/jsx';

const { withProvider, withContext } = createStyleContext(card);

const Root = withProvider(styled.div, 'root');

const Section = withContext(styled.div, 'section');

const Header = withContext(styled.div, 'header');

const Footer = withContext(styled.div, 'footer');

export const Card = Object.assign(Root, {
  Root,
  Section,
  Header,
  Footer,
});
