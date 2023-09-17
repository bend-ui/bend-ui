import { createComponent, forwardRef } from '@particles/primitives';
import { cx } from '@particles/panda-system/css';
import { textField } from '@particles/panda-system/recipes';
import type { TextFieldVariantProps } from '@particles/panda-system/recipes';
import type { ReactNode } from 'react';

export type InputProps = TextFieldVariantProps & {
  icon?: ReactNode;
};

export const Root = forwardRef<'input', InputProps>((props, ref) => {
  const { className, icon, size, ...rest } = props;
  const classes = textField({ size });
  return (
    <div className={classes.root}>
      {icon && <div className={classes.icon}>{icon}</div>}
      <input ref={ref} className={cx(classes.input, className)} {...rest} />
    </div>
  );
});

Root.displayName = 'Input';

export const Input = createComponent(Root);
