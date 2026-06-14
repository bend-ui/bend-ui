'use client';

import { nav } from '@bend-ui/styled-system/recipes';
import { styled, createStyleContext } from '@bend-ui/styled-system/jsx';
import { NavLink } from './NavLink';

const { withProvider, withContext } = createStyleContext(nav);

const Root = withProvider(styled.nav, 'root');

const Link = withContext(NavLink, 'link');

export const Nav = Object.assign(Root, { Link });
