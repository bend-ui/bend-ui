import { forwardRef } from 'react';
import { button } from '@particles/styled-system/recipes';
import { css, cx } from '@particles/styled-system/css';
import { splitCssProps } from '@particles/styled-system/jsx';
import { Slot } from '../Slot';
import type { ButtonProps } from './Button.types';

const getProps = (options: { props: any; recipe: any }) => {
  const [variantProps, restProps] = options.recipe.splitVariantProps(
    options.props,
  );
  const [cssProps, otherProps] = splitCssProps(restProps);
  const { css: cssProp, ...styleProps } = cssProps;
  return { otherProps, styleProps, cssProp, variantProps };
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const { otherProps, styleProps, cssProp, variantProps } = getProps({
      props: props,
      recipe: button,
    });

    const { children, className, asChild, disabled, icon, iconEnd, ...rest } =
      otherProps;

    const classes = button(variantProps);

    const Component = asChild ? Slot : 'button';

    return (
      <Component
        ref={ref}
        className={cx(classes.root, css(cssProp, styleProps), className)}
        data-disabled={disabled || variantProps.isDisabled}
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
