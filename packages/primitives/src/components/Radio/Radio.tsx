import { ChangeEvent, ReactNode, useState } from 'react';
import { createComponent, forwardRef } from '../../utils';

export type RadioRootProps = {
  children?: ReactNode;
  isDisabled?: boolean;
};

export const Root = forwardRef<RadioRootProps, 'input'>((props, ref) => {
  const { children, onChange, defaultChecked, isDisabled, ...rest } = props;

  const [state, setState] = useState<'checked' | 'unchecked'>(
    defaultChecked ? 'checked' : 'unchecked'
  );

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setState(event.currentTarget.checked ? 'checked' : 'unchecked');
    onChange?.(event);
  };

  return (
    <label
      data-state={state}
      data-disabled={isDisabled}
      aria-checked={state === 'checked'}
      aria-disabled={isDisabled}
    >
      <input
        ref={ref}
        type="radio"
        onChange={handleChange}
        defaultChecked={defaultChecked}
        disabled={isDisabled}
        {...rest}
      />
      {children}
    </label>
  );
});

type RadioControlProps = {
  children?: ReactNode;
};

const Control = forwardRef<RadioControlProps, 'div'>((props, ref) => {
  const { children, as: Component = 'div', ...rest } = props;
  return (
    <Component ref={ref} role="presentation" {...rest}>
      {children}
    </Component>
  );
});

type RadioLabelProps = {
  children?: ReactNode;
};

const Label = forwardRef<RadioLabelProps, 'span'>((props, ref) => {
  const { children, as: Component = 'span', ...rest } = props;
  return (
    <Component ref={ref} {...rest}>
      {children}
    </Component>
  );
});

export default createComponent(Root, { Root, Control, Label }, 'Radio');
