import { nav } from '@particles/styled-system/recipes';
import { createComponent } from '@particles/primitives';
import { createStyleContext } from '../../utils/create-style-context';
import { NavLink } from './NavLink';
import { NavRoot } from './NavRoot';

const { withProvider, withContext } = createStyleContext(nav);

const Root = withProvider(NavRoot, 'root');

const Link = withContext(NavLink, 'link');

export default createComponent(Root, { Link });
