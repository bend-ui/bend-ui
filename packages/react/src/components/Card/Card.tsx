import { card } from '@particles/styled-system/recipes';
import { createComponent } from '@particles/primitives';
import { styled } from '@particles/styled-system/jsx';
import { createStyleContext } from '../../utils/create-style-context';

const { withProvider, withContext } = createStyleContext(card);

const Root = withProvider(styled.div, 'root');

const Section = withContext(styled.div, 'section');

const Header = withContext(styled.div, 'header');

const Footer = withContext(styled.div, 'footer');

export const Card = createComponent(Root, {
  Root,
  Section,
  Header,
  Footer,
});
