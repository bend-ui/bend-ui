'use client';
import { splitCssProps } from '@particles/styled-system/jsx';
import { css, cx } from '@particles/styled-system/css';
import { Slot } from '../Slot';
import type { NavLinkProps } from './Nav.types';

export const NavLink = (props: NavLinkProps) => {
  const {
    ref,
    children,
    className,
    css: cssProp,
    icon,
    asChild,
    ...navLinkProps
  } = props;
  const [cssProps, otherProps] = splitCssProps(navLinkProps);

  const Component = asChild ? Slot : 'a';

  return (
    <Component
      ref={ref}
      className={cx(className, css(cssProps, cssProp))}
      {...otherProps}
    >
      <>
        {icon}
        {children}
      </>
    </Component>
  );
};

NavLink.displayName = 'Nav.Link';
