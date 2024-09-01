import { cx } from '@particles/styled-system/css';
import { input } from '@particles/styled-system/recipes';
import { forwardRef } from 'react';
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
  const { className, icon, iconEnd, addonStart, addonEnd, size, ...rest } =
    props;
  const classes = input({ size });

  const inputAttrs = {
    'data-has-icon': icon ? 'true' : undefined,
    'data-has-icon-end': iconEnd ? 'true' : undefined,
    'data-has-addon-start': addonStart ? 'true' : undefined,
    'data-has-addon-end': addonEnd ? 'true' : undefined,
  };

  return (
    <div className={classes.root}>
      {addonStart && <div className={classes.addonStart}>{addonStart}</div>}
      {icon && <div className={classes.icon}>{icon}</div>}
      <input
        ref={ref}
        className={cx(classes.input, className)}
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
