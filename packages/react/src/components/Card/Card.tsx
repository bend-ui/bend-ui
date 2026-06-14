'use client';

import { card } from '@bend-ui/styled-system/recipes';
import { createStyleContext, styled } from '@bend-ui/styled-system/jsx';

const { withProvider, withContext } = createStyleContext(card);

export const Root = withProvider(styled.div, 'root');

export const Header = withContext(styled.div, 'header');

export const Body = withContext(styled.div, 'body');

export const Footer = withContext(styled.h3, 'footer');

export const Title = withContext(styled.h3, 'title');

export const Description = withContext(styled.div, 'description');

const Section = styled.div;

export const Card = Object.assign(Root, {
  Root,
  Header,
  Body,
  Footer,
  Title,
  Description,
  Section,
});
