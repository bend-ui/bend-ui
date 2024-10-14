import { css, cx } from '@particles/styled-system/css';
import { input } from '@particles/styled-system/recipes';
import { forwardRef } from 'react';
import { splitCssProps } from '@particles/styled-system/jsx';
import type { InputVariantProps } from '@particles/styled-system/recipes';
import type { ComponentPropsWithoutRef, ReactNode } from 'react';

export type InputProps = ComponentPropsWithoutRef<'input'> &
  InputVariantProps & {
    icon?: ReactNode;
    iconEnd?: ReactNode;
    addonStart?: ReactNode;
    addonEnd?: ReactNode;
  };

export const Root = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const [variantProps, inputProps] = input.splitVariantProps(props);
  const [cssProps, otherProps] = splitCssProps(inputProps);
  const { className, icon, iconEnd, addonStart, addonEnd, ...rest } =
    otherProps;
  const classes = input(variantProps);

  const inputAttrs = {
    'data-has-icon': icon ? 'true' : undefined,
    'data-has-icon-end': iconEnd ? 'true' : undefined,
    'data-has-addon-start': addonStart ? 'true' : undefined,
    'data-has-addon-end': addonEnd ? 'true' : undefined,
  };

  return (
    <div className={cx(classes.root, css(cssProps), className)}>
      {addonStart && <div className={classes.addonStart}>{addonStart}</div>}
      {icon && <div className={classes.icon}>{icon}</div>}
      <input
        ref={ref}
        className={cx(classes.field)}
        {...inputAttrs}
        {...rest}
      />
      {iconEnd && <div className={classes.iconEnd}>{iconEnd}</div>}
      {addonEnd && <div className={classes.addonEnd}>{addonEnd}</div>}
    </div>
  );
});

Root.displayName = 'Input';

export const Input = Object.assign(Root, {});
