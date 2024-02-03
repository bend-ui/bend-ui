import { createComponent, forwardRef } from '@particles/primitives';
import { cx } from '@particles/styled-system/css';
import { input } from '@particles/styled-system/recipes';
import type { InputVariantProps } from '@particles/styled-system/recipes';
import type { ReactNode } from 'react';

export type InputProps = InputVariantProps & {
  icon?: ReactNode;
};

export const Root = forwardRef<'input', InputProps>((props, ref) => {
  const { className, icon, size, ...rest } = props;
  const classes = input({ size });
  return (
    <div className={classes.root}>
      {icon && <div className={classes.icon}>{icon}</div>}
      <input ref={ref} className={cx(classes.input, className)} {...rest} />
    </div>
  );
});

Root.displayName = 'Input';

export const Input = createComponent(Root);
