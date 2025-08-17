import { nav } from '@particles/styled-system/recipes';
import { styled, createStyleContext } from '@particles/styled-system/jsx';
import { NavLink } from './NavLink';

const { withProvider, withContext } = createStyleContext(nav);

const Root = withProvider(styled.nav, 'root');

const Link = withContext(NavLink, 'link');

export const Nav = Object.assign(Root, { Link });
