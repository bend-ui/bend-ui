import { nav } from '@particles/styled-system/recipes';
import { styled } from '@particles/styled-system/jsx';
import { createStyleContext } from '../../utils/create-style-context';
import { NavLink } from './NavLink';

const { withProvider, withContext } = createStyleContext(nav);

const Root = withProvider(styled.nav, 'root');

const Link = withContext(NavLink, 'link');

export const Nav = Object.assign(Root, { Link });
