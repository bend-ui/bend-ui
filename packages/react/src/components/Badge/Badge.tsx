'use client';

import { badge } from '@particles/styled-system/recipes';
import { withRecipe } from '../../utils';
import { styled } from '@particles/styled-system/jsx';

const Root = withRecipe(styled('div'), badge, 'root');

export const Badge = Object.assign(Root, {});
