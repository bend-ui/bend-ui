import { forwardRef } from 'react';
import { button } from '@particles/styled-system/recipes';
import { css, cx } from '@particles/styled-system/css';
import { splitCssProps } from '@particles/styled-system/jsx';
import { Slot } from '../Slot';
import type { ButtonProps } from './Button.types';

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    children,
    asChild,
    css: cssProp,
    className,
    palette,
    variant,
    size,
    isRounded,
    icon,
    iconEnd,
    isDisabled,
    disabled,
    ...otherProps
  } = props;

  const [cssProps, restProps] = splitCssProps(otherProps);

  const classes = button({ palette, variant, size, isRounded });

  const Component = asChild ? Slot : 'button';

  return (
    <Component
      ref={ref}
      className={cx(classes.root, className, css(cssProps, cssProp))}
      data-disabled={disabled || isDisabled}
      {...restProps}
    >
      {icon}
      {children && <span className={classes.label}>{children}</span>}
      {iconEnd}
    </Component>
  );
});

Button.displayName = 'Button';

export default Button;
