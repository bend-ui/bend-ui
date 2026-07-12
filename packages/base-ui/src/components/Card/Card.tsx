'use client';

import { createStyleContext, styled } from '@bend-ui/styled-system/jsx';
import { card } from '@bend-ui/styled-system/recipes';

const { withProvider, withContext } = createStyleContext(card);

const Root = withProvider(styled('div'), 'root');
const Header = withContext(styled('div'), 'header');
const Body = withContext(styled('div'), 'body');
const Footer = withContext(styled('div'), 'footer');
const Title = withContext(styled('h3'), 'title');
const Description = withContext(styled('div'), 'description');
const Section = withContext(styled('div'), 'section');

export const Card = Object.assign(Root, {
  Root,
  Header,
  Body,
  Footer,
  Title,
  Description,
  Section,
});
