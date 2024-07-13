import { forwardRef } from 'react';
import { button } from '@particles/styled-system/recipes';
import { css, cx } from '@particles/styled-system/css';
import { splitCssProps } from '@particles/styled-system/jsx';
import { Slot } from '../Slot';
import type { ButtonProps } from './Button.types';

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const [variantProps, buttonProps] = button.splitVariantProps(props);
    const [cssProps, otherProps] = splitCssProps(buttonProps);
    const { children, className, asChild, disabled, icon, iconEnd, ...rest } =
      otherProps;

    const classes = button(variantProps);

    const Component = asChild ? Slot : 'button';

    return (
      <Component
        ref={ref}
        className={cx(classes.root, css(cssProps), className)}
        data-disabled={disabled || buttonProps.isDisabled}
        {...rest}
      >
        {icon}
        {children && <span className={classes.label}>{children}</span>}
        {iconEnd}
      </Component>
    );
  },
);

Button.displayName = 'Button';
