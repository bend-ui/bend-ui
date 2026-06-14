'use client';

import { badge } from '@bend-ui/styled-system/recipes';
import { withRecipe } from '../../utils';
import { styled } from '@bend-ui/styled-system/jsx';

const Root = withRecipe(styled('div'), badge, 'root');

export const Badge = Object.assign(Root, {});
