import { forwardRef } from 'react';
import { splitCssProps } from '@particles/styled-system/jsx';
import { css, cx } from '@particles/styled-system/css';
import type { NavProps } from './Nav.types';

export const NavRoot = forwardRef<HTMLDivElement, NavProps>((props, ref) => {
  const { children, className, css: cssProp, direction, ...otherProps } = props;
  const [cssProps, restProps] = splitCssProps(otherProps);

  return (
    <nav
      ref={ref}
      className={cx(className, css(cssProps, cssProp))}
      {...restProps}
    >
      {children}
    </nav>
  );
});

NavRoot.displayName = 'Nav';
