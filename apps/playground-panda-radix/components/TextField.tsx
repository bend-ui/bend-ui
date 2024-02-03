import { cx } from '@particles/styled-system/css';
import { textField } from '@particles/styled-system/recipes';
import type { TextFieldVariant } from '@particles/styled-system/recipes';
import type { ComponentPropsWithoutRef, ReactNode } from 'react';

type InputProps = ComponentPropsWithoutRef<'input'> &
  Partial<TextFieldVariant> & {
    label?: ReactNode;
  };

const TextField = (props: InputProps) => {
  const { className, label, ...rest } = props;
  const classes = textField();
  return (
    <label className={cx(classes.root, className)}>
      <span className={classes.label}>{label}</span>
      <input className={classes.input} {...rest} />
    </label>
  );
};

export default TextField;
