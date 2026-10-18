'use client';
import type { SlotRecipeComponent } from '@bend-ui/core';

import { createSlotRecipeContext, styled } from '@bend-ui/styled-system/jsx';
import { card } from '@bend-ui/styled-system/recipes';

const { withProvider, withContext } = createSlotRecipeContext(card);

const Root: SlotRecipeComponent<'div', (typeof card)['__type']> = withProvider(
  styled('div'),
  'root',
);
const Header: SlotRecipeComponent<'div'> = withContext(styled('div'), 'header');
const Body: SlotRecipeComponent<'div'> = withContext(styled('div'), 'body');
const Footer: SlotRecipeComponent<'div'> = withContext(styled('div'), 'footer');
const Title: SlotRecipeComponent<'h3'> = withContext(styled('h3'), 'title');
const Description: SlotRecipeComponent<'div'> = withContext(
  styled('div'),
  'description',
);
const Section: SlotRecipeComponent<'div'> = withContext(
  styled('div'),
  'section',
);

export const Card = Object.assign(Root, {
  Root,
  Header,
  Body,
  Footer,
  Title,
  Description,
  Section,
});
