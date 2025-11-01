'use client';

import { card, cardSection } from '@particles/styled-system/recipes';
import { styled } from '@particles/styled-system/jsx';
import { withRecipe } from '../../utils';

const Root = withRecipe(styled('div'), card, 'root');

const Section = withRecipe(styled('div'), cardSection, 'section');

export const Card = Object.assign(Root, {
  Root,
  Section,
});
