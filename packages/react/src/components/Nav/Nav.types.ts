import type { NavVariantProps } from '@bend-ui/styled-system/recipes';
import type { HTMLStyledProps } from '@bend-ui/styled-system/types';
import type { ReactNode } from 'react';
import type { AsChildProps } from '../Slot';

export interface NavLinkProps extends HTMLStyledProps<'a'>, AsChildProps {
  /** The icon to display next to the link */
  icon?: ReactNode;
}

export interface NavProps extends HTMLStyledProps<'nav'>, AsChildProps {
  /** The direction of the nav */
  direction?: NavVariantProps['direction'];
}
